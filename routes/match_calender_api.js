const route  = require('express').Router()

const apecricket = require('ape-cricket')
const api_key = "LnIVZzsbPsc8690TX7IlTxwXlel1"

let international = [
    "India ","Sri Lanka ","Pakistan ","England ","Australia ","West Indies ","New Zealand ","Bangladesh ","South Africa "
]

let response_to_send = []
let count = 0
function matchesall(){
    apecricket.schedule( api_key, function(response){ 
        response = JSON.parse(response)
        response = response.data.data
        
        for(match of response){
            let team1 = match.name.split('v')[0]
            
            if(international.includes(team1)){
            //     console.log(typeof(match.unique_id))
            //  apecricket.cricketScore( api_key ,match.unique_id, function(response){ 
            //      response_to_send.push(response)
            //   });
                  response_to_send.push(match)
                  count++;
                  if(count == 25){
                      return ;
                  }
            }
            
        }

 })
}





route.get('/' , function(req,res){
    matchesall()
    setTimeout(function(){
        res.send(response_to_send)
    },2000)
})




exports = module.exports = route