const route = require('express').Router()

const apecricket = require('ape-cricket')

const  api_key = "LnIVZzsbPsc8690TX7IlTxwXlel1"

let imp_teams = [
    "India" , "Pakistan","Bangladesh","South Africa","England","Australia","Sri Lanka","New Zealand","West Indies"
]

let response_send = []

function matchesall(){
    apecricket.upcomingMatches( api_key, function(response){ 
        response = JSON.parse(response)
        response = response.data.matches
        
       response_send = []

        for (match of response){
            console.log(match)
            let k = 0;
            if(match.matchStarted == false){
                    return ;
            }
            let matchtype = match.type
            if((imp_teams.includes(match["team-1"]) || imp_teams.includes(match["team-2"])) && match.matchStarted == true){
                
                apecricket.cricketScore(api_key , match.unique_id.toString() , function(reqdata){
                    reqdata = JSON.parse(reqdata)
                    reqdata.data.type = matchtype
                    response_send.push(reqdata)
                    k++;
                    if( k >= 8 ){
                        return ;
                    }
                })
            }
        }
        

    })
}



route.get('/' , function(req,res){
    response_send =[] 
    matchesall()
    setTimeout(function(){
        console.log(response_send)
      res.send(response_send)
},3000)
})



exports = module.exports = route