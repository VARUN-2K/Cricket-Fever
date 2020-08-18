$(function(){
    let data_main;
    $.get('/news' , function(data){
        
        console.log("this is data")
        console.log(data)
        let list_news = $('#list_news')
        list_news.empty()
        for(news of data.articles){
            list_news.append(`
            <div class="scoreboard mb-5 mb-lg-3">
	          	<div class="divider text-center font-weight-bold"><span>${news.title}</span></div>
                  <div class="d-sm-flex mb-4">
                  
		          	<div class="sport-team d-flex"><br>
                          <div class="img logo" style="background-image: url(${news.urlToImage});"></div>
                          
                                    
                      </div>
                      
                      <p class="m-5">${news.description}</p>
                  </div>
                 
	          	<div class="text-center">
		          	<p><a href='${news.url}' class="btn btn-primary">More Details</a></p>
		          </div>
	          </div>
            `)
        }
    })
   
   console.log("this is datamain")
   console.log(data_main)
    
    let move1_box_a = $('#move1_box_a')
    let move1_box_b = $('#move1_box_b')
    let move1_box_c = $('#move1_box_c')
    let move1_box_img = $('#move1_box_img')
    
    move1_box_img.append(`<img src = "${data_main.articles[1].urlToImage}`)
    move1_box_b.append(`${data_main.articles[1].description}`)
    move1_box_c.append(`${data_main.articles[1].url}`)


})