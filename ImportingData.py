import pandas as pd
import json

data = pd.read_excel("COVID-19DataToday.xlsx")
data = data.dropna()
L = list(data.countriesAndTerritories.unique())

jsonList = []
dic = {}

for i in L:
    temp_df = data[data['countriesAndTerritories']==i]
    data1 = {}
    data1['value'] = int(temp_df['cases'].sum())
    data1['id'] = temp_df['geoId'].iloc[0]
    data1['population'] = int(temp_df['popData2018'].iloc[0])
    data1['countryName'] = temp_df['countriesAndTerritories'].iloc[0]
    temp_df1 = temp_df[temp_df['cases']!=0]
    data1['firstCase'] = str(temp_df1['dateRep'].iloc[-1]) 
    json_data = json.dumps(data1)
    jsonList.append(json_data)
        
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(jsonList, f, ensure_ascii=False, indent=4)    
