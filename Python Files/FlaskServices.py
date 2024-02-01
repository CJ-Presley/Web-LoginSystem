from flask import Flask, jsonify, request
from flask_cors import CORS
import cryptography
from bcrypt import checkpw, gensalt, hashpw
import LoginFunctions as LF
import sqlite3
from dateutil.parser import parse
from sqlite3 import Error
import re
import datetime

# app = Flask function - name as variable fed into function
app = Flask(__name__)
# Cross Origin Resourse Sharing - manually define who can send information to server
# CORS function from flask_cors : (see line 10), resource = {regex"anywhere/thing" : {(data can be sent from anywhere)}}
CORS(app, resources={r"/*": {"origins": "*"}})


# login
@app.route("/login", methods=["POST"])
def LoginDetails():
    logins = {}
    print("Request Recieved")
    with sqlite3.connect(
        r"Web-LoginSystem/Database Files/Bean&Brew-Account2.db"
    ) as conn:
        print("Connection Established")
        username = request.json.get("username")
        if LF.UsernameCheck(username):
            return jsonify(
                {
                    "success": False,
                    "message": "Username must be 5 - 16 characters longs and alphanumeric",
                }
            )
        password = request.json.get("password")
        print(password)
        if LF.PasswordCheck(password):
            password = password.encode("utf-8")
        else:
            return jsonify(
                {
                    "success": False,
                    "message": "Password must be between 5 and 16 characters and have atleast 1 uppercase character, 1 lowercase character and 1 number",
                }
            )
        try:
            cu = conn.cursor()
            print("Cursor Created")
            query = """Select * From Customers Where Username = ?"""
            cu.execute(query, (username,))
            results = cu.fetchall()
            print(results)
            for i in results:
                logins[i[3]] = i[5]
                print(logins)
                print(logins[username])
            if checkpw(password, logins[username]):
                return jsonify({"success": True, "message": "Login Successful"})
            else:
                return jsonify({"success": False, "message": "Incorrect Login Details"})
        except Exception as e:
            print(e)
            return jsonify({"success": False, "message": "Incorrect Login Details"})


# sign up
@app.route("/signup", methods=["POST"])
def SignupDetails():
    print("Request Recieved")
    with sqlite3.connect(
        r"Web-LoginSystem/Database Files/Bean&Brew-Account2.db"
    ) as conn:
        print("Connection Established")
        forename = request.json.get("forename")
        print(forename)
        surname = request.json.get("surname")
        dob = request.json.get("dob")
        print(dob)
        if not LF.DateCheck(dob):
            return jsonify(
                {
                    "success": False,
                    "message": "Value is either not a date or is in the incorrect format (DD/MM/YYYY)",
                }
            )
        username = request.json.get("username")
        print(username)
        if LF.UsernameCheck(username):
            return jsonify(
                {
                    "success": False,
                    "message": "Username must be 5 - 16 characters longs and alphanumeric",
                }
            )
        count = """Select Count(Username) From Customers Where Username = ?"""
        cu = conn.cursor()
        print("Cursor Created")
        cu.execute(count, (username,))
        results = cu.fetchall()
        for i in results:
            if int(i[0]) > 1:
                return jsonify({"success": False, "message": "Username is Taken"})
        password = request.json.get("password")
        if LF.PasswordCheck(password):
            password = password.encode("utf-8")
        else:
            return jsonify(
                {
                    "success": False,
                    "message": "Password must be between 5 and 16 characters and have atleast 1 uppercase character, 1 lowercase character and 1 number",
                }
            )
        salt = gensalt()
        hashedPassword = hashpw(password, salt)
        try:
            statement = """INSERT INTO Customers(Forename, Surname, Username, DOB, Password) VALUES(?,?,?,?,?)"""
            cu.execute(statement, (forename, surname, username, dob, hashedPassword))
            conn.commit()
            return jsonify({"success": True, "message": "Login Successful"})
        except Error as e:
            print("Value could not be added to DB", e)
            return jsonify({"success": False, "message": "Internal Server Error"})
        # else:
        #     return jsonify({"success": False, "message": "Passwords Do NOT Match"})


@app.route("/menu", methods=["GET"])
def MenuDetails():
    with sqlite3.connect(
        r"Web-LoginSystem/Database Files/Bean&Brew-Account2.db"
    ) as conn:
        print("Connection Established")
        query = """SELECT * FROM Menu"""
        cu = conn.cursor()
        cu.execute(query)
        menuItems = cu.fetchall()
        # print(menuItems[0])
        menuItemsList = []
        for i in menuItems:
            print(i[1:])
            item = i[1]
            type = i[2]
            desc = i[3]
            price = i[4]
            url = i[5]
            json = {
                "item": item,
                "type": type,
                "desc": desc,
                "price": price,
                "url": url,
            }
            menuItemsList.append(json)
        return jsonify({"menuItems": menuItemsList})


if __name__ == "__main__":
    app.run()
    # ssl_context="adhoc"
