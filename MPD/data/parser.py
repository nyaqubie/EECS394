import re
import time
scheduleFile = open('schedule.csv','r')
scheduleFile.readline()
schedule = []

for i in scheduleFile:
        i=i.split(',')

        team = i[1]
        date = i[2]
        opponent = i[4]
        location = i[7].strip()

        schedule.append([])
        schedule[-1].append(date)
        schedule[-1].append(team)
        schedule[-1].append(opponent)
        schedule[-1].append(location)

byTeam = {}

for i in schedule:
        teamname = re.sub(r'\W+', '', i[1])
        if byTeam.has_key(teamname):
                byTeam[teamname].append([i[0], i[1], i[2], i[3]])
        else:
                byTeam[teamname]=[]
                byTeam[teamname].append([i[0], i[1], i[2], i[3]])
for i in byTeam.items():
        if i[0] == "Northwestern" or i[0] == "Michigan":
                for j in i[1]:
                        outstring="INSERT INTO json_app_event (Name, Date) values ('" 
                        outstring+= j[1]
                        if j[3] == "Home":
                                outstring+= " at "
                        else:
                                outstring+= " vs "
                        outstring += j[2] + "', '"
                        date = time.strptime(j[0],"%m/%d/%Y")
                        outstring += str(date.tm_year) + '-' + str(date.tm_mon).zfill(2) + '-' + str(date.tm_mday).zfill(2) + " 12:00');"
                        print outstring
