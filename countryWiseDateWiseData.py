import pandas as pd
import json
import time

data = pd.read_excel("COVID-19DataToday.xlsx")
data = data.dropna()
L = list(data.geoId.unique())
data['dateRep'] = data['dateRep'].dt.strftime('%Y-%m-%d')
M = list(data.dateRep.unique())
M.sort(key=lambda x: time.mktime(time.strptime(x,"%Y-%m-%d")))

jsonList = []
dic = {}
data1 = {}

for i in L:
    temp_df = data[data['geoId']==i]
    jsonList = []
    for j in M:
        data2 = {}
        temp_df_1 = temp_df[temp_df['dateRep'] == j]
        data2["date"] = j
        if (temp_df_1.empty):
            data2["value"] = 0
        else:    
            data2["value"] = int(temp_df_1['cases'].iloc[0])
        json_data = json.dumps(data2)
        jsonList.append(json_data)
    data1[i] = jsonList
        
with open('wisewise.txt', 'w', encoding='utf-8') as f:
    f.write("var cWDW = ")
    json.dump(data1, f, ensure_ascii=False, indent=4)    

with open('wisewise.txt', 'r') as infile, open('js/countryWiseDateWiseData.js', 'w') as outfile:
    temp = infile.read().replace("\\", "").replace("\"{", "{").replace("}\"","}").replace("_", " ")
    outfile.write(temp)