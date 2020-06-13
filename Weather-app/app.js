
const weatherRequest = require('./Weather')
const yargs = require('yargs')


yargs.command({
    command: "fetch",
    describe: "provide address to fetch weather",
    builder: {
        address : {
            describe: "Provide address", 
            demandOption: true, 
            type: "string"
        }
    }, 
    handler(argv) {
        weatherRequest.fetchWeather(argv.address)
    }
})

console.log('Ferching weather for - ' + yargs.argv.address)
// weatherRequest.fetchWeather("mangalore")