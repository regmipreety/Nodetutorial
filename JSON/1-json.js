const fs= require("fs");
const records = fs.readFileSync('1-json.json');
const data=JSON.parse(records);
data.name="Sandesh Babu"
data.age = 40
const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json',newData)
