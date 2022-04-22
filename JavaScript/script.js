
const searchHeros = document.getElementById('type-text')


function fetchHerosResults(){

	var searchItem=document.getElementById('type-text').value
    var requestUrl = 'https://superheroapi.com/api.php/5235867496463328/search/'
    
    // search input suggestion 

    	var searchvalue=this.value
    	console.log(searchvalue)

      //checking if length less then 3 then do nothing
    	if(searchItem.length<3)
    	{
    		return
    	}
      
    	var xhrRequest = new XMLHttpRequest();
      
      requestUrl+searchvalue     
      xhrRequest.onload= function ()
                          {
                            //converting response to json
    	                      var response_in_JSON=JSON.parse(xhrRequest.response)
                            var searchresults=document.getElementById('display-results')

                            //clear previous results
                            searchresults.innerHTML=""

                            //for each hero searh results 
                            response_in_JSON.results.forEach(hero =>{
                              var imgsrc=hero.image.url
                              
                              //creating a html element 'li' and defining its class
                              var li = document.createElement("li")
                              li.classList.add('search-item')

                              //writing html code using javascript
                              li.innerHTML=` <img id=display-results-img src="${imgsrc} "/>
                                             <h4>${hero.name}</h4>
                                             <h4 name="${hero.id}">${hero.id}</h4>
                                             <div>
                                                 <button type="submit"
                                                         id="submit-button"
                                                         onclick="favouriteClick(${hero.id})">
                                                       Add to favourites
                                                 </button>
                                            
                                                 <button type="submit"
                                                          id="submit-button"
                                                          onclick="handleResultClick(${hero.id})">Details</buttton>`
                              searchresults.appendChild(li)
                              console.log(imgsrc)
                              })                            
      }


      xhrRequest.open('get',requestUrl+searchItem,true)    
      xhrRequest.send()
       
    }


     function handleResultClick(id){
                              console.log(id)
                              localStorage.setItem('searchSelected',id)
                              location.assign('./details.html')
                            }
      function favouriteClick(hero){

                              var oldfavourites = [];
                              oldfavourites.push(localStorage.getItem('favSelected')) 

                              console.log(typeof(oldfavourites))

                              if(!oldfavourites.includes(hero)){
                                oldfavourites.push(hero)
                              }
                              localStorage.setItem('favSelected',oldfavourites)
                              // location.assign('./fav.html')
                            }
