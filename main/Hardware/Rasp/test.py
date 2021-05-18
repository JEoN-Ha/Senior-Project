import requests

JeonhaURL = "http://localhost:4000"
rq = requests.get(JeonhaURL + '/getMenuData')
print(rq.json())
print(rq.status_code)