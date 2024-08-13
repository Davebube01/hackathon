# To send mails to applicants
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib


def send_mail(recipients):
    sender = "davidabraham356@gmail.com"
    subject = "Hackthon Registeration Completed"
    body = "Your registration has been completed, you will recieve further details shortly"
    password = "armf okez przm jsrx"

    try:
        for recipient in recipients:
            msg = MIMEText(body)
            msg['Subject'] = subject
            msg['From'] = sender
            msg['To'] = recipient

            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
                smtp_server.login(sender, password)
                smtp_server.sendmail(sender, recipient, msg.as_string())
        print("Emails sent successfully.")
    except Exception as e:
        print(f"Error sending emails: {e}")


    