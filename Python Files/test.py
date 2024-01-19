import sqlite3

with sqlite3.connect(r"Database Files/Bean&Brew-Account2.db") as conn:
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
        json = {"item": item, "type": type, "desc": desc, "price": price, "url": url}
        menuItemsList.append(json)