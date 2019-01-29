#autoboye
import requests
import pprint
from bs4 import BeautifulSoup
import pandas as pd

##pprint formats terminal prints
pp = pprint.PrettyPrinter()

#declare essential data structures, list of topics to crawl, empty list to store data
crawler_topics = ('amazon aws', 'csharp', 'java', 'html', 'javascript',
                  'sql', 'scrum', 'python', 'microsoft', 'devops')

column_titles = ('thisyeardata', 'lastyeardata', 'twoyearagodata')
list_of_data = []

def get_new_data(crawler_topic):
    print(crawler_topic)
    jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/" + crawler_topic + ".do"
    get_request = requests.get(jobswatch_url)
    soup = BeautifulSoup(get_request.text, features="lxml")
    tr_data = soup.find_all(class_="fig")

    x = 0
    # while x < len(tr_data):
    while x < 36:
        list_of_data.append(tr_data[x].text.strip())
        x += 1
    csv_data = pd.np.array(list_of_data).reshape((len(list_of_data) // 3, 3))
    print(csv_data)
    pd.DataFrame(csv_data, columns=column_titles).to_csv(crawler_topic + ".csv", index=False)

if __name__ == "__main__":
    for x in crawler_topics:
        get_new_data(x)

#iterate all topics in the list, make get request, crawl table data, store data in files

# for topic in crawler_topics:
#     jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/" + topic + ".do"
#     print(jobswatch_url)
#     get_request = requests.get(jobswatch_url)
#     soup = BeautifulSoup(get_request.text, features="lxml")
#     table_row_data = soup.find_all(class_="fig")

#     x = 0
#     while x < len(table_row_data):
#         list_of_data.append(table_row_data[x].text.strip())
#         x += 1
#         csv_data = pd.np.array(list_of_data).reshape((len(list_of_data) // 3, 3))
#         pd.DataFrame(csv_data, columns=column_titles).to_csv(jobswatch_url + ".csv", index=True)
    # print(jobswatch_url)
    # pp.pprint(list_of_data)