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
    temp_df['dateRep'] = temp_df['dateRep'].dt.strftime('%Y-%m-%d')
    K = list(temp_df['dateRep'])
    K = K[::-1] 
    data1['allDates'] = K
    M = list(temp_df['cases'])
    M = M[::-1] 
    data1['allDatesCases'] = M
    temp_df1 = temp_df[temp_df['cases']!=0]
    data1['firstCase'] = str(temp_df1['dateRep'].iloc[-1]) 
    json_data = json.dumps(data1)
    jsonList.append(json_data)
        
with open('data.txt', 'w', encoding='utf-8') as f:
    f.write("var covid19Data = ")
    json.dump(jsonList, f, ensure_ascii=False, indent=4)    

with open('data.txt', 'r') as infile, open('js/data.js', 'w') as outfile:
    temp = infile.read().replace("\\", "").replace("\"{", "{").replace("}\"","}").replace("_", " ")
    outfile.write(temp)