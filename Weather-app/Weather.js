const geoCode = require('./utils/GeoCode')
const forecast = require('./utils/forecast')

const fetchWeather = (address) => {
    console.log(address)
    geoCode(address, (data, errorMessage) => {
        if (errorMessage)
            return console.log(errorMessage)
        console.log("Fetching weather for ", data.location)
        forecast(data.longitude, data.lattitude, (forecastData, error) => {
            if (error) {
                console.log(error)
            } else {
                console.log(forecastData)
            }
        })
    })
}

module.exports = {
    fetchWeather: fetchWeather
}