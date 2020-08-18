const route = require('express').Router()
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('418b6ee5a2e94e998b8f6310cb8b9a47')
const request = require('request')

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
  


route.get('/' , function(req,res){
  request('https://newsapi.org/v2/top-headlines?country=in&category=sports&q=cricket&apiKey=418b6ee5a2e94e998b8f6310cb8b9a47', { json: true }, (err, response, body) => {
  if (err) { return console.log(err); }
  
  console.log(body.status)
  console.log(body.totalResults)
  res.send(body)
});

})



exports = module.exports = route