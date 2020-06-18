
const request = require('request')

const forecast = (longitude, lattitude, callback) => {
    const weatherUrl = "http://api.weatherstack.com/current?access_key=37a5fafce95f16f2aff2811f6a911b19&query=" + lattitude + "," + longitude
    console.log("weatherUrl - >", weatherUrl)
    request({ url: weatherUrl, json: true }, (error, {body} = {}) => {
        if (error) {
            callback(null, "Unable to connecto to Weatherstak server")
        } if (body.error) {
            callback(null, resonse.body.error.info)
        } else {
            callback(body.current.weather_descriptions + ". Its currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out", null)
        }
    })
}

module.exports = forecast