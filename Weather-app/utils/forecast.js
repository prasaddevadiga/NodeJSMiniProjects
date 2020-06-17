
const request = require('request')

const forecast = (longitude, lattitude, callback) => {
    const weatherUrl = "http://api.weatherstack.com/current?access_key=37a5fafce95f16f2aff2811f6a911b19&query=" + lattitude + "," + longitude
    console.log("weatherUrl - >", weatherUrl)
    request({ url: weatherUrl, json: true }, (error, resonse) => {
        if (error) {
            callback(null, "Unable to connecto to Weatherstak server")
        } if (resonse.body.error) {
            callback(null, resonse.body.error.info)
        } else {
            callback(resonse.body.current.weather_descriptions + ". Its currently " + resonse.body.current.temperature + " degrees out. It feels like " + resonse.body.current.feelslike + " degrees out", null)
            // console.log(resonse.body.current.weather_descriptions + ". Its currently " + resonse.body.current.temperature + " degrees out. It feels like " + resonse.body.current.feelslike + " degrees out")
        }
    })
}

module.exports = forecast