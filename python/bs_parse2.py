#beautifulsoup implementation
import requests
import pprint
import json
from bs4 import BeautifulSoup
import pandas as pd

pp = pprint.PrettyPrinter()
jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/Javascript.do"
column_titles = ('csvindex','thisyeardata', 'lastyeardata', 'twoyearagodata')

crawler_topics = ('aws', 'csharp', 'java', 'html', 'javascript',
                  'sql', 'scrum', 'python', 'microsoft', 'devops')

filename = "js_rows.csv"
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
pp.pprint(list_of_data)

csv_data = pd.np.array(list_of_data).reshape((len(list_of_data) // 3, 3))
pd.DataFrame(csv_data, columns=column_titles).to_csv("js_data_rows.csv", index=True)
print("script run, file created")

# pp.pprint(list_of_data)

# file = open("Javascript.csv", "w+")
# for value in list_of_data:

#     file.write(value + ",")
