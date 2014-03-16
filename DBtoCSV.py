import pyodbc
import csv
import time

condition = 1
#Loops for all eternity. Good for constantly polling data in a lo-tech way.
while condition:
    cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=ServerNameGoesHere;DATABASE=DatabaseNameGoesHere;DSN=myserver;Trusted_Connection=yes')
    cursor = cnxn.cursor()
    #Between the """ is where the SQL statement goes
    cursor.execute("""
SELECT *
  FROM TableNameGoesHere WITH (NOLOCK)
  WHERE Condition = 0
  AND	OtherCondition = 'SomeString'
                           """)
    rows = cursor.fetchall()
    with open('Name_of_CSV_Being_Created.csv', 'w', newline='') as f:
        writer = csv.writer(f)#Creates the writer object
        writer.writerow([i[0] for i in cursor.description]) # write headers
        writer.writerows(rows) #writes the individual rows returned by the query
    f.close()
    print ("Refreshed the CSV")
    #wait for a minute
    time.sleep(60)
    
        

