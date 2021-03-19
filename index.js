const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const apiKey = "57a18cf17d23ef9370169069ca8123a3"


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.render('index')
})

app.post('/', function (req, res) {
    let city = req.body.city
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}
    &units=imperial&appid=${apiKey}`
    res.render('index')
    console.log(req.body.city)

    request(url, function (err, response, body) {
        if (err) {
            res.render('index', { weather: null, error: 'this is wrong, you need to fix this' })
        } else {

        }
        let weather = Json.parse(body)

        if (weather.main === undefined) {
            res.renderrender('index', { weather: null, error: 'this is wrong, you need to fix this' })
        }

        let message = `It is ${weather.main.temp} degress outside in ${weather.name}`
        res.render('index', { weather: message)
    })
})



const port = 3001
app.listen(port, () => {
    console.log(`I am using ${port}`)
})