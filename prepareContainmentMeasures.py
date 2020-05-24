import pandas as pd
import json

data = pd.read_csv("COVIDContainment.csv")
L = data.Country.unique()
L = [x for x in L if str(x) != 'nan']
data['isoCode'] = 0
dataC = pd.read_excel("COVID-19DataToday.xlsx")
K = dataC.countriesAndTerritories.unique()

dic = {}
for i in K:
    temp = dataC[dataC['countriesAndTerritories']==i]
    if (temp.shape[0] != 0):
        dic[i] = temp['geoId'].iloc[0] 
dic["Hong Kong"] = "HK"
dic["Macau"] = "MO"
dic["European Union"] = "EU"
dic["North Korea"] = "KP"
dic["Macedonia"] = "MK"
dic["Vatican City"] = "VA"


for i in L:
    print(i)
    if ((i.find("US")!= -1) | (i.find("United States")!= -1)):
        print("hereee")
        data.loc[data['Country']==i, 'isoCode'] = dic["United States of America"]
    else:
       data.loc[data['Country']==i, 'isoCode'] = dic[i]
    
O = data.isoCode.unique()

data = data[data.isoCode != 0]
import datetime
data['Date Start']= pd.to_datetime(data['Date Start'])

data['Date Start']= data['Date Start'].dt.date

data = data.sort_values(by='Date Start')
mydix={}

for i in O:
    jsonList = []
    temp = data[data['isoCode']==i]
    itr = temp.shape[0]
    for j in range(0,itr-1):
        if ((pd.isnull(temp['Date Start'].iloc[j]) == True) or
            (pd.isnull(temp['Description of measure implemented'].iloc[j]) == True)):
            print("removing nan")
        else:
            dic={}
            dic["country"] = temp['Country'].iloc[j]
            dic["dateAnnounced"] = str(temp['Date Start'].iloc[j])
            dic["news"] = temp['Description of measure implemented'].iloc[j].replace("\"", " ")
            json_data = json.dumps(dic)
            jsonList.append(json_data)
    if not jsonList:
        print("doing nothing")
    else:
        mydix[i] = jsonList
        

with open('news.txt', 'w', encoding='utf-8') as f:
    f.write("var newsData = ")
    json.dump(mydix, f, ensure_ascii=False, indent=4)    

with open('news.txt', 'r') as infile, open('js/news.js', 'w') as outfile:
    temp = infile.read().replace("\\", "").replace("\"{", "{").replace("}\"","}").replace("_", " ")
    outfile.write(temp)        