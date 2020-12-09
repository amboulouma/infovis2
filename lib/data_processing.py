import pandas as pd 

df = pd.read_csv("../data/data_per_months.csv")

df = df[['TimeStamp', 'Station.Number','Oxygen.Electrode.Output','Oxygen.Saturation.percent','Calculated.Oxygen']]

df = df.dropna()

df.to_csv("../data/data_unstable_biotops.csv")

print(df.isna().sum())

print(df.head())