#getdata.py
from lxml import html
import requests
import pprint
import json

print("Scrapy script executed")

# x = input("Enter a language ")
pp = pprint.PrettyPrinter(indent=3)
array = [ ] 
# webpage = requests.get("https://www.itjobswatch.co.uk/jobs/uk/" + x + ".do")
webpage = requests.get("https://www.itjobswatch.co.uk/jobs/uk/python.do")
website_byte_data = html.fromstring(webpage.content)

website_figures = website_byte_data.xpath('//td[@class="fig"]/text()')

pp.pprint("table data, " + str(website_figures))

new_web_figures = str(website_figures)
with open( 'Javascript.json', 'w') as outfile:
    json.dump(new_web_figures, outfile)
# with open('data.json', 'w') as outfile:
#     json.dump(webpage, outfile)