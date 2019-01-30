#autoboye
import requests
import pprint
from bs4 import BeautifulSoup
import pandas as pd
import os
import glob
import datetime
import shutil

##pprint formats terminal prints
pp = pprint.PrettyPrinter()

#declare essential data structures, list of topics to crawl, empty list to store data
crawler_topics = ('amazon aws', 'csharp', 'java', 'html', 'javascript',
                  'sql', 'scrum', 'python', 'microsoft', 'devops')

# temp_topics = "microsoft"

column_titles = ('thisyeardata', 'lastyeardata', 'twoyearagodata')
list_of_data = []

csv_folder = "stored_csv_"

def get_new_data(crawler_topic):
    print(crawler_topic)
    jobswatch_url = "https://www.itjobswatch.co.uk/jobs/uk/" + crawler_topic + ".do"
    get_request = requests.get(jobswatch_url)
    soup = BeautifulSoup(get_request.text, features="lxml")
    tr_data = soup.find_all(class_="fig")

    x = 0
    while x < 36:
        list_of_data.append(tr_data[x].text.strip())
        x += 1
        if x == 36:
            csv_data = pd.np.array(list_of_data).reshape((len(list_of_data) // 3, 3))
            print(csv_data)
            pd.DataFrame(csv_data, columns=column_titles).to_csv(crawler_topic + ".csv", index=False)
            list_of_data.clear()


    #create a directory using a string and current date converted to a string as the folder name
    #this is to house all csv data, new files are created to house new data, all date organised
def make_dir():
    current_date = datetime.datetime.now()
    date = str(current_date.day) + "-"+ str(current_date.month) + "-"+ str(current_date.year)
    new_dir = csv_folder + date
    if os.path.isdir(new_dir):
        print("Exists")
    else:
        try:    
            os.makedirs(new_dir)
        except OSError as err:
            print(err)

#locates all csv files an moves them into the file created in make_dir() fuction
def find_csv_files():
    current_date = datetime.datetime.now()
    date = str(current_date.day) + "-"+ str(current_date.month) + "-"+ str(current_date.year)
    new_dir = csv_folder + date
    for file in glob.glob("*.csv"):
        print(file)
        shutil.move(file, new_dir)

#runs the code below in the set order when executed as a script
if __name__ == "__main__":
    make_dir()
    for x in crawler_topics:
        get_new_data(x)
    find_csv_files()