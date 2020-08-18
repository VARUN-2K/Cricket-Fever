const route = require("express").Router()

var apecricket = require("ape-cricket");

var api_key = "LnIVZzsbPsc8690TX7IlTxwXlel1";



function get_all_info(name1,player_info){
    return new Promise(function(resolve,reject){
         apecricket.playerFinder(api_key, name1 , function(response){
            response = JSON.parse(response)
            let players = response.response.data
            for (player of players){
                let pid = player.pid
                pid = pid.toString()
                 apecricket.playerStats(api_key , pid ,function(info){
                    info = JSON.parse(info)
                    player_info.push(info)
                })
            }
        })
        setTimeout(function(){
            resolve(player_info)
        },4000)
    })
}

route.post('/' , function(req,res,next){
    let player_info = [
     
    ]
    let name1 = req.body.name
    
    name1 = name1.toString()
    console.log(name1)
    get_all_info(name1 , player_info).then((players)=>{
        console.log(players)
        res.send(players)
    })
    
})

exports = module.exports = route