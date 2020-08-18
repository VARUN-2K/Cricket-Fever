


$(function(){

    let player_name = $('#player_name')
    let table_players = $('#table_players')
    let btn = $('#findPlayer_btn')
    
    btn.click(function(){
        
        $.post('/apiRoute/' , 
        {name : player_name.val()}
        , function(data){
        
            
            for (player of data){
                table_players.append(`
                <div class="mr-3">
                  <table border="4">
                    <tr>
                      <th>FULL NAME</th>
                      <th>${player.data.fullName}</th>
                    </tr>
                    <tr>
                      <td>DATE OF BIRTH</td>
                      <td>${player.data.born}</td>
                    </tr>
                    <tr>
                      <td>AGE</td>
                      <td>${player.currentAge}</td>
                    </tr>
                    <tr>
                      <td>COUNTRY</td>
                      <td>${player.country}</td>
                    </tr>
                    <tr>
                      <td>BATTING STYLE</td>
                      <td>${player.battingStyle}</td>
                    </tr>  
                    <tr>
                      <td>BOWLING STYLE</td>
                      <td>${player.bowlingStyle}</td>
                    </tr>    
                    <tr>
                      <td>PLAYING ROLE</td>
                      <td>${player.playingRole}</td>
                    </tr>
                    <tr>
                      <td>MAJOR TEAMS</td>
                      <td>${player.majorTeams}</td>
                    </tr>
                  </table>
                </div>
                `)
            }
           
           
        })
    })

})