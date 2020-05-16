import pandas as pd
import json

data = pd.read_excel("COVID-19DataToday.xlsx")
data = data.dropna()
L = list(data.countryterritoryCode.unique())
geoiddict = {}
for i in L:
    temp_df = data[data['countryterritoryCode']==i]
    geoiddict[i] = temp_df['geoId'].iloc[0]
    
    
ecodata = pd.read_excel("WEOApr2020all.xlsx")
L = list(ecodata.ISO.unique())

for i in L:
    if i in geoiddict:
      ecodata = ecodata.replace(i,geoiddict[i])

ecodata = ecodata.replace("ERI" , "ER")
ecodata = ecodata.replace("HKG" , "HK")
ecodata = ecodata.replace("KIR" , "KI")
ecodata = ecodata.replace("UVK" , "XK")
ecodata = ecodata.replace("LSO" , "LS")
ecodata = ecodata.replace("MAC" , "MO")
ecodata = ecodata.replace("MHL" , "MH")
ecodata = ecodata.replace("FSM" , "FM")
ecodata = ecodata.replace("NAM" , "NA")
ecodata = ecodata.replace("NRU" , "NR")
ecodata = ecodata.replace("PLW" , "PW")
ecodata = ecodata.replace("WSM" , "WS")
ecodata = ecodata.replace("SLB" , "SB")
ecodata = ecodata.replace("TON" , "TO")
ecodata = ecodata.replace("TKM" , "TM")
ecodata = ecodata.replace("TUV" , "TV")
ecodata = ecodata.replace("VUT" , "VU")

ecodata = ecodata.fillna(0)
L = list(ecodata.ISO.unique())

jsonList = []

for i in L:
    dic = {}
    temp_df = ecodata[ecodata['ISO']==i]
    temp_df = temp_df[temp_df['WEO Subject Code'] == "NGDP_RPCH"]
    dic['id'] = i
    dic['prevYearGDP'] = temp_df[2019].iloc[0]
    dic['currYearGDP'] = temp_df[2020].iloc[0]
    json_data = json.dumps(dic)
    jsonList.append(json_data)
    
#with open('economyData.json', 'w', encoding='utf-8') as f:
#    json.dump(jsonList, f, ensure_ascii=False, indent=4)  
    
with open('economyData.txt', 'w', encoding='utf-8') as f:
    f.write("var economyData = ")
    json.dump(jsonList, f, ensure_ascii=False, indent=4)    

with open('economyData.txt', 'r') as infile, open('js/economyData.js', 'w') as outfile:
    temp = infile.read().replace("\\", "").replace("\"{", "{").replace("}\"","}")
    outfile.write(temp)    
    
    