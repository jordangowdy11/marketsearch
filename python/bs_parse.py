#beautifulsoup implementation

import requests
import pprint
import json
from bs4 import BeautifulSoup

pp = pprint.PrettyPrinter()

jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/python.do"

make_request = requests.get(jobswatch_url)

soup = BeautifulSoup(make_request.text, features="lxml")

tr_data = soup.find_all(class_="fig")

list_of_data = []

x = 0
while x < 35:
    list_of_data.append(tr_data[x].text.strip())
    x += 1
pp.pprint(list_of_data)

file = open("Javascript.csv", "w+")
for value in list_of_data:
    file.write(value + "\n")
