#beautifulsoup implementation
import requests
import pprint
import json
from bs4 import BeautifulSoup
import pandas as pd

# import os
# from pymongo import MongoClient
# client = MongoClient('mongodb://localhost:27017/')
# db = client.language_data
# collection = collection('perm-microsoft)

#jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/python.do"
#jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/Javascript.do"
jobswatch_url = "https://www.itjobswatch.co.uk/contracts/uk/csharp.do"
column_titles = ('thisyeardata', 'lastyeardata', 'twoyearagodata')
filename = "cont-csharp.csv"
pp = pprint.PrettyPrinter()
jobswatch_url = "https://www.itjobswatch.co.uk/contracts/uk/amazon%20aws.do"
column_titles = ('thisyeardata', 'lastyeardata', 'twoyearagodata')
filename = "cont-aws.csv"
row_length = 3

make_request = requests.get(jobswatch_url)
soup = BeautifulSoup(make_request.text, features="lxml")

tr_data = soup.find_all(class_="fig")

list_of_data = []
list_of_data_nocomma = []

x = 0
while x < 36:
    list_of_data.append(tr_data[x].text.strip())
    x += 1

csv_data = pd.np.array(list_of_data).reshape((len(list_of_data) // 3, 3))
pd.DataFrame(csv_data, columns=column_titles).to_csv("cont-csharp.csv", index=True)
print("script run, file created")

<<<<<<< HEAD
=======
pd.DataFrame(csv_data, columns=column_titles).to_csv("cont-aws.csv", index=False)
print("data inserted")
>>>>>>> fedeee08bb1258ab2268533d73b95e8a4af5bcc2
# pp.pprint(list_of_data)

# file = open("Javascript.csv", "w+")
# for value in list_of_data:

#     file.write(value + ",")