import express from 'express'
import nunjucks from 'nunjucks'
const app = express()
app.set("view engine", "njk")

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
})

app.use(express.static('public'))

env.addGlobal("baseUrl", "https://api.themoviedb.org/3")
env.addGlobal("apiKey", "4e4e80e882e727e79125d96a8b649773")

app.get('/', function (req, res) {
    res.render('index.njk');
})

app.listen(3000)
console.log('Up on 3000')