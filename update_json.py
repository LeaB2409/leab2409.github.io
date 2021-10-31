import pandas as pd
import json

with open('./vals.json') as f:
    data = json.load(f)

greetings = data["Greeting"]

vals = pd.read_excel("./Lea.xlsx").sample(frac = 1)
vals = vals.to_dict(orient = "list")
vals.update({"Greetings" : greetings})

with open("vals.json", "w") as text_file:
    text_file.write(json.dumps(vals))
