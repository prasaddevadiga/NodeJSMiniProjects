const request = require('request')
const url = "http://api.weatherstack.com/current?access_key=37a5fafce95f16f2aff2811f6a911b19&query=Mangalore&units=f"

request({url: url, json: true}, (error, resonse ) => {
    console.log(resonse.body.current.weather_descriptions + ". Its currently " + resonse.body.current.temperature + " degrees out. It feels like " + resonse.body.current.feelslike + " degrees out")
})


const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Market%20Street%20and%20Fremont%20Street.json?access_token=pk.eyJ1IjoicHJhc2FkZGV2YWRpZ2EiLCJhIjoiY2tiNmN1OTU0MHU0bzJxcGRuZG91eXh3aiJ9.sDzpeZVBPh4F63RGggsLUA&limit=1"