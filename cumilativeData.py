import pandas as pd
import json
import time

data = pd.read_excel("COVID-19DataToday.xlsx")
data['dateRep'] = data['dateRep'].dt.strftime('%Y-%m-%d')
data = data.dropna()
L = list(data.dateRep.unique())
L.sort(key=lambda x: time.mktime(time.strptime(x,"%Y-%m-%d")))

jsonList = []
dic = {}

count = 0
deathCount = 0
for i in L:
    temp_df = data[data['dateRep']==i]
    data1 = {}
    count = count + int(temp_df['cases'].sum())
    deathCount = deathCount + int(temp_df['deaths'].sum())

    data1['value'] = count
    data1['date'] = temp_df['dateRep'].iloc[0]
    data1['deathValue'] = deathCount
    json_data = json.dumps(data1)
    jsonList.append(json_data)
         
    
with open('cumiData.txt', 'w', encoding='utf-8') as f:
    f.write("var worldAddedData = ")
    json.dump(jsonList, f, ensure_ascii=False, indent=4)    

with open('cumiData.txt', 'r') as infile, open('js/worldAddedData.js', 'w') as outfile:
    temp = infile.read().replace("\\", "").replace("\"{", "{").replace("}\"","}")
    outfile.write(temp)
