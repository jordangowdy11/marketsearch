#beautifulsoup implementation
import requests
import pprint
import json
from bs4 import BeautifulSoup
import pandas as pd

pp = pprint.PrettyPrinter()
<<<<<<< HEAD


#jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/python.do"
jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/Javascript.do"
=======
jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/python.do"
>>>>>>> 747ee5b03b94b64725dfa9c7c819cf26b4d68f2c
column_titles = ('thisyeardata', 'lastyeardata', 'twoyearagodata')
filename = "phyton_rows.csv"
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
<<<<<<< HEAD
pd.DataFrame(csv_data, columns=column_titles).to_csv("js_data_rows.csv", index=False)

print("Enter Language:")
input()

=======
pd.DataFrame(csv_data, columns=column_titles).to_csv("phyton_data_rows.csv", index=False)
print("script ran yo")
>>>>>>> 747ee5b03b94b64725dfa9c7c819cf26b4d68f2c
# pp.pprint(list_of_data)

# file = open("Javascript.csv", "w+")
# for value in list_of_data:

#     file.write(value + ",")