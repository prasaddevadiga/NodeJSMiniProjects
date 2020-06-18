const geoCode = require('./utils/GeoCode')
const forecast = require('./utils/forecast')

const fetchWeather = (address) => {
    console.log(address)
    geoCode(address, ({longitude, lattitude, location} = {}, errorMessage) => {
        if (errorMessage)
            return console.log(errorMessage)
        console.log("Fetching weather for ", location)
        forecast(longitude, lattitude, (forecastData, error) => {
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