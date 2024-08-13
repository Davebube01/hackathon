from sqlalchemy.exc import IntegrityError
from models import db, User, Applicants, Teams
from user import Admin
from flask import jsonify
# save user created i.e admin
def save_user(username: str, email: str, password: str) ->User:
    try:
        user = User(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return user
    except IntegrityError as e:
        db.session.rollback()
        raise ValueError(f"Username or email already exists")
    
# get user info
def get_user(username) ->Admin:
    user = User.query.filter_by(username=username).first_or_404(description="User not found.")
    return Admin(user.id, user.username, user.email, user.password)

# register and save applicant info
def register_applicants(first_name: str, last_name: str, email: str, phone_number: str, team_name=None):
    try:
        applicant = Applicants(first_name=first_name, last_name=last_name, email=email, phone_number=phone_number)

        if team_name:
            team = Teams.query.filter_by(team_name=team_name).first()
            if team:
                applicant.team_id = team.id
        db.session.add(applicant)
        db.session.commit()
        return applicant
        
    except IntegrityError as e:
        db.session.rollback()
        raise ValueError(f"Applicant with this email already exists ")
    
    except Exception as e:
        db.session.rollback()
        raise ValueError(f"An error occurred: {str(e)}")

# get registered applicants info
def get_all_applicants():
    applicants = Applicants.query.all()
    all_applicants = []

    for applicant in applicants:
        applicant_data = {
            "id": applicant.id,
            "first_name": applicant.first_name,
            "last_name": applicant.last_name,
            "email": applicant.email,
            "phone_number": applicant.phone_number,
            "team_id": applicant.team_id,
            "team_name": applicant.team.team_name if applicant.team else None
        }
        all_applicants.append(applicant_data)
    return (all_applicants)

# get single applicamt info
def get_single_applicant(email):
    applicant = Applicants.query.filter_by(email=email).first_or_404(description="Applicant not found.")
    applicant_data = {
        "first_name": applicant.first_name,
        "last_name": applicant.last_name,
        "email": applicant.email,
        "phone_number": applicant.phone_number,
        "team_id": applicant.team_id,
        "team_name": applicant.team.team_name if applicant.team else None
    }
    return jsonify(applicant_data)


# register and save teams info
def register_team(team_name: str, contact_name: str, contact_email: str):
    try:
        team = Teams(team_name=team_name, contact_name=contact_name, contact_email=contact_email)
        db.session.add(team)
        db.session.commit()
        return team
    except IntegrityError as e:
        db.session.rollback()
        if "UNIQUE constraint failed: teams.contact_email" in str(e):
            raise ValueError("The contact email already exists.")
        elif "UNIQUE constraint failed: teams.team_name" in str(e):
            raise ValueError("The team name already exists.")
        else:
            raise ValueError("An integrity error occurred.")
        
# get team info
def get_single_team(team_name):
    try: 
        team = Teams.query.filter_by(team_name=team_name).first_or_404(description="Applicant not found.")
        team_data = {
            "team_id": team.id,
            "team_name": team.team_name,
            "contact_name": team.contact_name,
            "contact_email": team.contact_email,
            # "applicants": team.applicants if team.applicants else None
        }
        return jsonify(team_data)
    except Exception as e:
        return f"error is {str(e)}"

# return all team names
def get_all_teams():
    teams = Teams.query.all()
    all_teams = []

    for team in teams:
        team_data = {
            "id": team.id,
            "team_name": team.team_name,
            "contact_name": team.contact_name,
            "contact_email": team.contact_email,
        }
        all_teams.append(team_data)
    return (all_teams)


def get_team_members():
    pass