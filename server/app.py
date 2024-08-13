import os
from datetime import timedelta
from flask import Flask, request, jsonify, make_response
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_login import LoginManager, login_required, login_user, logout_user, current_user
from service import save_user, get_user, register_applicants, register_team, get_all_teams, get_all_applicants, get_single_team
from send_mail import send_mail
from flask_restful import Resource, Api
from dotenv import load_dotenv
from models import db

from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config["JWT_SECRET_KEY"] = os.environ['JWT_SECRET_KEY']
# app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=30)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ['SQLALCHEMY_DATABASE']
db.init_app(app)

api= Api(app)
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
jwt = JWTManager(app)

with app.app_context():
    db.create_all()

# create admin
@app.route("/create-admin", methods=["GET", "POST"])
def create_admin():
    message = ""
    if request.method =="POST":
        username = request.json["username"]
        email = request.json["email"]
        password = request.json["password"]
        try:
            hash_password = bcrypt.generate_password_hash(password)
            user = save_user(username,email,hash_password)
            return jsonify({
                "message": f"User {user.username} created succesfully",
                "user": {
                    "id": user.id,
                    "username": user.username, 
                    "email": user.email,
                },
            }), 201
        except ValueError as e:
            message = str(e)
            return  jsonify ({"message": message}), 400
        

# Login for admin
class Login(Resource):
    def post(self):
        username = request.json.get("username")
        password = request.json.get("password")
        
        if not username or not password:
            return make_response(jsonify({"message": "Username and password are required"}), 400)
        
        try:
            user = get_user(username)
            
            if user and bcrypt.check_password_hash(user.password, password):
                access_token = create_access_token(identity=user.id, fresh=True)

                return make_response(jsonify({
                    "message": "User logged in successfully",
                    'access_token': access_token,
                    "user": {
                        "id": user.id,
                        "username": user.username,
                        "email": user.email
                    }
                }), 200)
            else:
                return make_response(jsonify({"message": "Incorrect username or password"}), 400)
        
        except Exception as e:
            db.session.rollback()
            message = str(e)
            return make_response(jsonify({"message": message}), 500)

api.add_resource(Login, '/login')

# for refresh token
class TokenRefresh(Resource):
    @jwt_required(refresh=True)
    def get(self):
        current_user = get_jwt_identity()
        new_access_token = create_access_token(identity=current_user, fresh=False)
        return make_response(jsonify({'access_token': new_access_token})), 200
    
api.add_resource(TokenRefresh, '/refresh-token')


# Applicants registeration
class Register_Applicants(Resource):
    def post(self):
        data = request.get_json()
        first_name = data.get("firstName")
        last_name = data.get("lastName")
        email = data.get("email")
        phone_number= data.get("phoneNumber")
        team_name = data.get("teamName")
        recipients = []

        if not first_name or not last_name or not email or not phone_number:
            return make_response(jsonify({"message": "All fields are required"}), 400)

        try:
            applicant = register_applicants(first_name, last_name, email, phone_number, team_name)
            recipients.append(email)
            send_mail(recipients)
            return make_response(jsonify({
                "message": f"Congratulations {applicant.first_name} {applicant.last_name}, you have been registered",
                "applicant": {
                    "id": applicant.id,
                    "first_name": applicant.first_name, 
                    "last_name": applicant.last_name,
                    "email": applicant.email,
                    "phone_number": applicant.phone_number,
                    "team_id": applicant.team_id,
                    "team_name": applicant.team.team_name if applicant.team else None
                },
            }), 201)
        except ValueError as e:
            message = str(e)
            return  make_response(jsonify ({"message": message}), 400)
        
api.add_resource(Register_Applicants, '/register-applicant')

# teams registeration
class Register_Teams(Resource):
    def post(self):
        data =request.get_json()
        team_name = data.get("teamName")
        contact_name = data.get("contactName")
        contact_email = data.get("contactEmail")

        try:
            team = register_team(team_name, contact_name, contact_email)
            return make_response(jsonify({
                "message": f"Congratulations, you have created a team with the name {team_name}",
                "team": {
                    "id": team.id,
                    "team_name": team.team_name,
                    "contact_name": team.contact_name,
                    "contact_email": team.contact_email,
                }
            }), 201)
        
        except ValueError as e:
            return make_response(jsonify({"message": str(e)}), 400)
        except Exception as e:
            return make_response(jsonify({"message": "An unexpected error occurred."}), 500)

api.add_resource(Register_Teams, '/register-team')

# return registered applicants information
class Applicants(Resource):
    pass

# return registered teams
class TeamsResource(Resource):
    def get(self):
        try:
            teams = get_all_teams()
            return make_response(jsonify(teams))
        except Exception as e:
            return make_response(jsonify({"error": str(e)}, 500))
        
api.add_resource(TeamsResource, '/registered-teams')

    
class Get_Applicant(Resource):
    def get(self):
        try:
            applicants = get_all_applicants()
            return make_response(jsonify(applicants))
        except Exception as e:
            return make_response(jsonify({"error": str(e)}, 500))

api.add_resource(Get_Applicant, "/registered-applicants")

# return single team info
class Get_Team(Resource):
    def post(self):
        data =request.get_json()
        teamName = data.get("teamName")
        try:
            team = get_single_team(teamName)
            return make_response(jsonify({
                "message": "This is a team",
                "team_name": team.team_name,
            }))
        except Exception as e:
            return make_response(jsonify({"error": str(e)}, 500))

api.add_resource(Get_Team, '/team-info')

if __name__ == "__main__":
    app.run(debug=True)
