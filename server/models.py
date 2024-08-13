from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from uuid import uuid4

class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base)

def get_uuid():
  return uuid4().hex

# Admin user table
class User(db.Model):
    __tablename__ = "users"
    id: Mapped[str] = mapped_column(String(32), primary_key=True, default=get_uuid)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(100), nullable=False)
    password: Mapped[str] = mapped_column(String(100), nullable=False)

    def __init__(self, username: str, email: str, password: str):
        self.username = username
        self.email = email
        self.password = password

    def __repr__(self):
        return f"<User(username={self.username}, email={self.email})>"
    
# Applicants table
class Applicants(db.Model):
  __tablename__= "applicants"
  id: Mapped[str] = mapped_column(String(32), primary_key=True, default=get_uuid)
  first_name: Mapped[str] = mapped_column(String(50),nullable=False)
  last_name: Mapped[str] = mapped_column(String(50),nullable=False)
  email: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)
  phone_number: Mapped[str] = mapped_column(String(32), nullable=False)
  team_id: Mapped[str] = mapped_column(String(32), ForeignKey('teams.id'), nullable=True)
  team = db.relationship('Teams', back_populates='applicants') #establish relationship with the teams table

# Teams table
class Teams(db.Model):
   __tablename__ = "teams"
   id: Mapped[str] = mapped_column(String(32), primary_key=True, default=get_uuid)
   team_name: Mapped[str] = mapped_column(String(50),nullable=False, unique=True)
   contact_name: Mapped[str] = mapped_column(String(50),nullable=False)
   contact_email: Mapped[str] = mapped_column(String(50),nullable=False, unique=True)
   applicants = db.relationship('Applicants', back_populates='team') # establish relationship woth the applicants table
    
    
