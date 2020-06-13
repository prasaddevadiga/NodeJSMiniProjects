
const request = require('request')

const fetchWeather = (address) => {
    const geoURL = encodeURI("https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address + ".json?access_token=pk.eyJ1IjoicHJhc2FkZGV2YWRpZ2EiLCJhIjoiY2tiNmN1OTU0MHU0bzJxcGRuZG91eXh3aiJ9.sDzpeZVBPh4F63RGggsLUA&limit=1")
    request({uri: geoURL, json: true}, (error, response) => {
        if (error) {
            console.log("Unable to connecto to Weatherstak server")
        }
        else if (response.body.features.length === 0) {
            console.log("no localtion found")
        } else {
            const longitude = response.body.features[0].center[0]
            const lattitude = response.body.features[0].center[1] 
            const weatherUrl = "http://api.weatherstack.com/current?access_key=37a5fafce95f16f2aff2811f6a911b19&query=" + lattitude +","+longitude
    
            request({url: weatherUrl, json: true}, (error, resonse) => {
                if (error) {
                    console.log("Unable to connecto to Weatherstak server")
                } if (resonse.body.error) {
                    console.log(resonse.body.error.info)
                } else {
                    console.log(resonse.body.current.weather_descriptions + ". Its currently " + resonse.body.current.temperature + " degrees out. It feels like " + resonse.body.current.feelslike + " degrees out")
                }
            })
        }
    })
}

module.exports = {
    fetchWeather: fetchWeather
}