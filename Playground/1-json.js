const fileSystem = require('fs')

const jsonObject = JSON.parse(fileSystem.readFileSync("1-json.json").toString())
jsonObject.title = "Prasad"
jsonObject.age = 32
fileSystem.writeFileSync("1-json.json", JSON.stringify(jsonObject))