$(function(){

    let list_matches = $('#list_matches')

    $.get('/matchcalender' , function(data){
        console.log("this is data")
        console.log(data)
		list_matches.empty()
		list_matches.empty()
		let k = 0;
        for (item of data){
			k++;
			if( k >= 25){
				break;
			}

            if(item.name.split('v')[0].trim() == "Sri Lanka"){
				item.img1 = "images/srilanka.jpg"
 			}
			else if(item.name.split('v')[0].trim() == "South Africa"){
				item.img1 = "images/southafrica.png"
			}
			else if(item.name.split('v')[0].trim() == "New Zealand"){
				item.img1 = "images/newZ.png"
			} 
		    else if(item.name.split('v')[0].trim() == "Pakistan"){
				item.img1 = "images/pakistan_logo.png"
 			} 
			else if(item.name.split('v')[0].trim() == "India"){
				item.img1 = "images/india_logo.jpg"
			} 
			else if(item.name.split('v')[0].trim() == "Bangladesh"){
				item.img1 = "images/bangladesh.jpeg"
			} 
			else if(item.name.split('v')[0].trim() == "England"){
				item.img1 = "images/england.png"
			} 
			else if(item.name.split('v')[0].trim() == "West Indies"){
				item.img1 = "images/westindies.jpeg"
			} 
			else{
				item.img1 = "images/aus_logo.png"
			}  

			if(item.name.split('v')[1].split('at')[0].trim() == "Sri Lanka"){
				item.img2 = "images/srilanka.jpg"
			}
			else if(item.name.split('v')[1].split('at')[0].trim() == "South Africa"){
				item.img2 = "images/southafrica.png"
			}
			else if(item.name.split('v')[1].split('at')[0].trim() == "New Zealand"){
				item.img2 = "images/newZ.png"
			}
			else if(item.name.split('v')[1].split('at')[0].trim() == "Pakistan"){
				item.img2 = "images/pakistan_logo.png"
			}
			else if(item.name.split('v')[1].split('at')[0].trim() == "India"){
				item.img2 = "images/india_logo.jpg"
			}
			else if(item.name.split('v')[1].split('at')[0].trim() == "Bangladesh"){
				item.img2 = "images/bangladesh.jpeg"
			}
			else if(item.name.split('v')[1].split('at')[0].trim() == "West Indies"){
				item.img2 = "images/westindies.jpeg"
			}
			else if(item.name.split('v')[1].split('at')[0].trim() == "England"){
				item.img2 = "images/england.png"
			}
			else{
				item.img2 = "images/aus_logo.png"
			}

            list_matches.append(`
            <div class="col-lg-6 md-6 sm-12 ">
	          <div class="scoreboard mb-5 mb-lg-0">
	          	<div class="divider text-center"><span>${item.date} ; ${item.name.split('at')[1]}</span></div>
	          	<div class="d-sm-flex mb-4">
		          	<div class="sport-team d-flex align-items-center">
	          			<div class="img logo" style="background-image: url(${item.img1});"></div>
									<div class="text-center px-1 px-md-3 desc">
										<h3 class="font-weight-bold">${item.name.split('v')[0]}</h2>
									</div>
		          	</div>
		          	<div class="sport-team d-flex align-items-center">
	          			<div class="img logo order-sm-last" style="background-image: url(${item.img2});"></div>
									<div class="text-center px-1 px-md-3 desc">
										<h3 class="font-weight-bold">${item.name.split('v')[1].split('at')[0]}</h2>
									</div>
		          	</div>
	          	</div>
	          	
	          </div>
					</div>
					 
            `)
        }
    })

})