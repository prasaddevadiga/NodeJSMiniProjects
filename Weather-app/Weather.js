const geoCode = require('./utils/GeoCode')
const forecast = require('./utils/forecast')

const fetchWeather = (address) => {
    console.log(address)
    geoCode(address, (data, errorMessage) => {
        if (errorMessage) {
            console.log(errorMessage)
        } else {
            forecast(data.longitude, data.lattitude, (data, error) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log(data)
                }
            })
        }
    })
}

module.exports = {
    fetchWeather: fetchWeather
}