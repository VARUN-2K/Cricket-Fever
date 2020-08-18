$(function(){
    
    let upcoming_matches = $('#upcoming_matches') 
   

    
    $.get('/upcoming' , function(data){
        let k  = 0
        upcoming_matches.empty()
        
        for (match of data){
            match = match.data
            k++;
            if(k>=10){
                break;
            }
			
            if(match["team-1"] == "Sri Lanka"){
				match.img1 = "images/srilanka.jpg"
 			}
			else if(match["team-1"] == "South Africa"){
				match.img1 = "images/southafrica.png"
			}
			else if(match["team-1"] == "New Zealand"){
				match.img1 = "images/newZ.png"
			} 
		    else if(match["team-1"] == "Pakistan"){
				match.img1 = "images/pakistan_logo.png"
 			} 
			else if(match["team-1"] == "India"){
				match.img1 = "images/india_logo.jpg"
			} 
			else if(match["team-1"] == "Bangladesh"){
				match.img1 = "images/bangladesh.jpeg"
			} 
			else if(match["team-1"] == "England"){
                match.img1 = "images/england.png"
			} 
			else if(match["team-1"] == "West Indies"){
				match.img1 = "images/westindies.jpeg"
			} 
			else{
				match.img1 = "images/aus_logo.png"
			}


            if(match["team-2"] == "Sri Lanka"){
				match.img2 = "images/srilanka.jpg"
 			}
			else if(match["team-2"] == "South Africa"){
				match.img2 = "images/southafrica.png"
			}
			else if(match["team-2"] == "New Zealand"){
				match.img2 = "images/newZ.png"
			} 
		    else if(match["team-2"] == "Pakistan"){
				match.img2 = "images/pakistan_logo.png"
 			} 
			else if(match["team-2"] == "India"){
				match.img2 = "images/india_logo.jpg"
			} 
			else if(match["team-2"] == "Bangladesh"){
				match.img2 = "images/bangladesh.jpeg"
			} 
			else if(match["team-2"] == "England"){
                match.img2 = "images/england.png"
			} 
			else if(match["team-2"] == "West Indies"){
				match.img2 = "images/westindies.jpeg"
			} 
			else{
				match.img2 = "images/aus_logo.png"
			}

            if(match.type == 'Test'){
                upcoming_matches.append(`
            <div class="scoreboard mb-5 mb-lg-0">
	          	<div class="divider text-center"><span>${match.stat}; ${match.provider.pubDate.split('T')[0]} ; Test Cricket</span></div>
	          	<div class="d-sm-flex mb-4">
		          	<div class="sport-team d-flex align-items-center">
	          			<div class="img logo" style="background-image: url(${match.img1});"></div>
									<div class="text-center px-1 px-md-3 desc">
                                        <h2 class="font-weight-bold">${match["team-1"]}</h2>
                                        <h4 class="team-name">(${match.score.split('&amp;')[0].split(' ')[-1]})</h4>
                                        <h4 class="team-name">(${match.score.split(';')[1].split('*')[0]})</h4>
									</div>
		          	</div>
		          	<div class="sport-team d-flex align-items-center">
	          			<div class="img logo order-sm-last" style="background-image: url(${match.img2});"></div>
									<div class="text-center px-1 px-md-3 desc">
                                        <h2 class="font-weight-bold">${match["team-2"]}</h2>
                                        <h4 class="team-name">(${match.score.split('&amp;')[1].split(' ')[0]})</h4>
                                        <h4 class="team-name">(${match.score.split('&amp;')[1].split(' ')[-1]})</h4>
									</div>
		          	</div>
	          	</div>
	          	<div class="text-center">
		          	
		          </div>
	          </div>
					</div>
            `)
            }
            
            else {
                upcoming_matches.append(`
                <div class="scoreboard mb-5 mb-lg-0">
                      <div class="divider text-center"><span>${match.stat}; ${match.provider.pubDate.split('T')[0]} ;${match.type}</span></div>
                      <div class="d-sm-flex mb-4">
                          <div class="sport-team d-flex align-items-center">
                              <div class="img logo" style="background-image: url(${match.img1});"></div>
                                        <div class="text-center px-1 px-md-3 desc">
                                            <h2 class="font-weight-bold">${match["team-1"]}</h2>
                                            <h4 class="team-name">(${match.score.split(';')[0].split(' ')[-2]})</h4>
                                        </div>
                          </div>
                          <div class="sport-team d-flex align-items-center">
                              <div class="img logo order-sm-last" style="background-image: url(${match.img2});"></div>
                                        <div class="text-center px-1 px-md-3 desc">
                                            <h2 class="font-weight-bold">${match["team-2"]}</h2>
                                            <h4 class="team-name">(${match.score.split(';')[1].split(' ')[1]})</h4>
                                        </div>
                          </div>
                      </div>
                      <div class="text-center">
                          
                      </div>
                  </div>
                        </div>
                `)
            }

           
        }
        
    })
})