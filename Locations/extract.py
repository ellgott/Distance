import re
import json

lines = []
cities = {}

with open("locs_raw.txt", "r", encoding="utf-8") as f:
    text = f.read().strip()

pattern = r'target="_blank">(.*?)<'
matches = re.findall(pattern, text)

for capital in matches:
    cities[capital]= {}


for city in cities.keys():
    if 'administrative' in city:
        continue

    pattern = rf'{city}</a></td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>'
    matches = re.findall(pattern, text, re.DOTALL)
    country, lat, lon = matches[0]

    cities[city]['country'] = country
    cities[city]['lat'] = lat
    cities[city]['lon'] = lon

with open("locs_clean.js", "w", encoding="utf-8") as f:
    f.write("const locs = ")
    json.dump(cities, f, ensure_ascii=False, indent=2)
    f.write(";")





