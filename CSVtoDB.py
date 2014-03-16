import pyodbc
import time

SOURCE_FILE = "File_Name_of_Dataset.csv"
#Connects to the database
cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=SereverNameHere;DATABASE=DatabaseNameHere;DSN=myserver;Trusted_Connection=yes')
cursor = cnxn.cursor()
with open(SOURCE_FILE, 'r') as opened_file:
    # Skip the first line because its header information.
    opened_file.readline()
    for row in opened_file:
        datum = row.split(",")
        #Place variables into the database
        cursor.execute("""
        INSERT INTO TableName VALUES ((?),(?),(?),(?),(?),(?),(?),(?),(?));
        """,datum[0],datum[1],datum[2],datum[3],datum[4],datum[5],datum[6],datum[7],datum[10])
        print ("Data Inserted")
        #This commits the transaction to the database
        cnxn.commit()
print ("Finished!")
