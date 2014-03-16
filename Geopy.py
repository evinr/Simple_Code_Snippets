from geopy import geocoders
import datetime
import time
import re

#Opens text file containing the seed data
seedData = ('34.03035500,-118.071978','34.03035500,-118.071978')

regex= '.*'

for i in seedData:
    time.sleep(.25)
    g = geocoders.GoogleV3()
    location = g.geocode(i)
    #Preforms regex pattern matching to handle normalizations
    match = re.search(regex, str(location))
    # If-statement after search() tests if it succeeded
    if match:
        #All success goes here
        print (location) 
            
    else:
        #All failures do this.
        print ('for some reason this failed: ',i)
        print ('\n')




