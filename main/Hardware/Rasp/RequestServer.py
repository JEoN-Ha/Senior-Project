import requests
import json

JeonhaURL = "http://localhost:4000"
data = {"imgCarNumber": "69구 4381"}

rq = requests.post(JeonhaURL + '/carNumberIsEqual', json=data)
resp =  rq.json()
print(resp["resultNo"])
print(rq.status_code)   

