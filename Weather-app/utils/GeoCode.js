const request = require('request')

const geoCode = (address, callBack) => {
    const geoURL = encodeURI("https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address + ".json?access_token=pk.eyJ1IjoicHJhc2FkZGV2YWRpZ2EiLCJhIjoiY2tiNmN1OTU0MHU0bzJxcGRuZG91eXh3aiJ9.sDzpeZVBPh4F63RGggsLUA&limit=1")
    request({uri: geoURL, json: true}, (error, response) => {
        if (error) {
            callBack(null, "Unable to connecto to Weatherstak server")
        }
        else if (response.body.features.length === 0) {
            callBack(null, "no localtion found")
        } else {
            callBack({
                longitude: response.body.features[0].center[0], 
                lattitude: response.body.features[0].center[1], 
                location: response.body.features[0].place_name
            }, null)
        }
    })
}

module.exports = geoCode