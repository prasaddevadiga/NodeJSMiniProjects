const https = require('http')
const url = "http://api.weatherstack.com/current?access_key=37a5fafce95f16f2aff2811f6a911b19&query=12.88419,74.85526"

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(data)
    })

    response.on('end', () => {
        
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on("error", (err) => {
    console.log("Error", err)
})

request.end()