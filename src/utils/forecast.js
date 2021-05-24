const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=64f8f83ba6a334d1a50dde4c36e8b7fc&query=' + latitude + ',' + longitude +'&unit=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degress out.')
        }
    })
}

module.exports = forecast