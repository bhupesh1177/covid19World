import pandas as pd
import json

data = pd.read_excel("covidVaccineStatus.xlsx")
data = data.fillna("data not available")
L = data.TrialPhase.unique()

dix = {}
for i in L:
    tempDf = data[data['TrialPhase'] == i]
    K = []
    tempDic = {}
    for j in range(0, tempDf.shape[0]):
        tempDic['Candidate'] = tempDf.Candidate.iloc[j];
        tempDic['Sponsor'] = tempDf.Sponsor.iloc[j];
        tempDic['SourceOfFunding'] = tempDf.Funding.iloc[j];
        json_data = json.dumps(tempDic)
        K.append(json_data)
    dix[i] = K
    
with open('vaccine.txt', 'w', encoding='utf-8') as f:
    f.write("var vaccineData = ")
    json.dump(dix, f, ensure_ascii=False, indent=4)    

with open('vaccine.txt', 'r') as infile, open('js/vaccineData.js', 'w') as outfile:
    temp = infile.read().replace("\\", "").replace("\"{", "{").replace("}\"","}").replace("_", " ")
    outfile.write(temp)        