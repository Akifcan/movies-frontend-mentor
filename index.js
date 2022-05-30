import express from 'express'
import nunjucks from 'nunjucks'
import axios from 'axios'
const app = express()
app.set("view engine", "njk")

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
})

app.use(express.static('public'))

env.addGlobal("apiKey", "4e4e80e882e727e79125d96a8b649773")

app.get('/', async function (req, res) {

    const trendsRequest = await axios.get(`https://api.themoviedb.org/3//trending/movie/week?api_key=${env.getGlobal('apiKey')}`)
    const discoverRequest = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${env.getGlobal('apiKey')}`)


    const trends = trendsRequest.data.results.map(item => {
        return {
            name: item.title,
            year: item.release_date.split('-')[0],
            image: "https://image.tmdb.org/t/p/w500/" + item.backdrop_path,
            vote: item.vote_average
        }
    })

    const discovers = discoverRequest.data.results.map(item => {
        return {
            name: item.title,
            year: item.release_date.split('-')[0],
            image: "https://image.tmdb.org/t/p/w500/" + item.poster_path,
            vote: item.vote_average
        }
    })

    res.render('index.njk', { trends, discovers });
})

app.listen(3000)
console.log('Up on 3000')