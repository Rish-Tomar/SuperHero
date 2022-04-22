const item = document.querySelector('hero-details-div')
const name= document.getElementById('name')
const gender = document.getElementById('gender')
const powerstats = document.getElementById('powerstats')
const bio = document.getElementById('bio')

function fetchDetails(){
	var xhrRequest = new XMLHttpRequest();


	xhrRequest.onreadystatechange = function(){
		if(this.readyState== 4)
		{
			//converting recieved response to JSON format
			var responseJson=JSON.parse(xhrRequest.response)
			console.log(responseJson)

			const imgsrc=responseJson.image.url
            $('#bttn').remove()
			//showing the results in html file
			//image 
			 $('#img-src').attr('src',imgsrc)

			var showdetails=document.getElementById('details-list');
            
            //create  list item for showing name
			name.innerHTML=`<h4>${responseJson.name}</h4>`
			//Showing gender
			gender.innerHTML=`${responseJson.appearance.gender}`
			//showing powerstats
			powerstats.innerHTML=`<ol>
			                           <li>Intelligence :${responseJson.powerstats.intelligence} </li>
			                           <li>Speed        :${responseJson.powerstats.speed} </li>
			                           <li>Durability   :${responseJson.powerstats.durability}  </li>
			                           <li>Strength     :${responseJson.powerstats.strength}</li>
			                           <li>Power        :${responseJson.powerstats.power}</li>
			                      </ol>`
			bio.innerHTML=`<ol>
			                   <li>Work        :${responseJson.work.occupation}</li>
			                   <li>Aliases     :${responseJson.biography.aliases}
			                   <li>Publisher   :${responseJson.biography.publisher}
			                   <li>Birth place :${responseJson.biography['place-of-birth']}`

		}
		
	}

	xhrRequest.open('get','https://superheroapi.com/api.php/5235867496463328/'+localStorage.getItem('searchSelected'))
	xhrRequest.send()
}

$('#bttn').click(fetchDetails)
