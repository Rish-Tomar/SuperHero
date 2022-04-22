const divele=document.getElementsByClassName('show-fav')
const list=document.getElementById('fav-list')

//array to store unique elements
var arr=[]

//function to fetch heros from Api
function fetchFavs(){ 
    
    //fetching id's from local storage 
	const favHerostr = localStorage.getItem('favSelected');

	//converting to string array
    const favHero = favHerostr.split(',')

    // parsing every value of array to integer and making array unique
    pos=0;
    for(var i=0;i<favHero.length;i++){
    	var val=parseInt(favHero[i]);
    	if(!arr.includes(val)){
    		arr[pos]=val
    		pos++
    	}
    }

    //rendering html to show favourites

     arr.forEach(ele=>{

     	var xhrRequest=new XMLHttpRequest()
        
	    xhrRequest.onreadystatechange=function(){
		if(this.readyState==4)
		{
			var json_response=JSON.parse(xhrRequest.response)
			var image=json_response.image.url
			var name=json_response.name

			//creating  html element and rendering
			var li=document.createElement('li')
			li.classList.add('fav-list-item')
			li.innerHTML=`<div><h4>${name}</h4>
			              <button type="submit" onclick="removeFav(${ele})">Remove</button>
			              </div>			              
			              <img src="${image}" id="fav-image">`
			list.appendChild(li)
		}
		
	    }

	    xhrRequest.open('get','https://superheroapi.com/api.php/5235867496463328/'+ele)
	    xhrRequest.send()

     })	
}

//function to delete superhero from favourites
function removeFav(id){
	for(val=0;val<arr.length;val++)
	{
		if(arr[val]==id)
		{
			console.log('val is',arr[val])
			arr.splice(val,1)
		}
       localStorage.setItem('favSelected',arr)
	}
	console.log(arr)
	alert('removed!!, click on show Favourites')
	location.assign('./fav.html')
}


$('#favbutton').click(fetchFavs)
