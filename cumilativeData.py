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
for i in L:
    temp_df = data[data['dateRep']==i]
    data1 = {}
    count = count + int(temp_df['cases'].sum())

    data1['value'] = count
    data1['date'] = temp_df['dateRep'].iloc[0]
    json_data = json.dumps(data1)
    jsonList.append(json_data)
        
with open('worldAddedData.json', 'w', encoding='utf-8') as f:
    json.dump(jsonList, f, ensure_ascii=False, indent=4)    
