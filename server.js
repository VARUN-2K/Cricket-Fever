const express = require('express')
const path = require('path')
const apiRoute = require('./routes/api')
const contactapiRoute = require('./routes/contact_api')
const newsRoute = require('./routes/news_report')
const matchCalenderRoute = require('./routes/match_calender_api')
const upcomingmatchesRoute = require('./routes/upcomingmatches_api')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/' , express.static(path.join(__dirname , "public")))

app.use('/apiRoute' , apiRoute)
app.use('/contactRoute' , contactapiRoute)
app.use('/news' , newsRoute)
app.use('/matchcalender' , matchCalenderRoute)
app.use('/upcoming' , upcomingmatchesRoute)

app.listen("10223" , function(){
    console.log("server started")
})