import re
import time
barsFile = open('Bars.csv','r')
barsFile.readline()

for i in barsFile:
        i=i.split(',')
        name = i[0].strip()
        street = i[1].strip()
        city = i[2].strip()
        statezip = i[3].strip()
        latit = i[4].strip()
        longit = i[5].strip()

        outstring="INSERT INTO json_app_location (Name, Address, Geoloc) values (\"" 
        outstring+= name
        outstring+= "\",\""
        outstring += street + " " + city + ", " + statezip
        outstring+= "\",\""
        outstring+= latit + "," + longit
        outstring+= "\");"
        print outstring
