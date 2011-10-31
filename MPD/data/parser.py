import re

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
        outstring = ''
        outstring+="var " + i[0] + " = new team('"
        outstring+= i[1][0][1] + "', ["
        for j in i[1]:
                outstring+="['"
                outstring+= j[0] + "','" + j[2] + "','" + j[3] 
                outstring+="'],"
        outstring+="])"
        print outstring
