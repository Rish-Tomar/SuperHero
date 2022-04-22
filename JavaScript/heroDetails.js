
// fetching html elements and saving into a variable
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
			                           <li><u>Intelligence</u> :${responseJson.powerstats.intelligence} </li>
			                           <li><u>Speed       </u> :${responseJson.powerstats.speed} </li>
			                           <li><u>Durability  </u>:${responseJson.powerstats.durability}  </li>
			                           <li><u>Strength    </u> :${responseJson.powerstats.strength}</li>
			                           <li><u>Power       </u>:${responseJson.powerstats.power}</li>
			                      </ol>`
			bio.innerHTML=`<ol>
			                   <li><u>Work</u>        :${responseJson.work.occupation}</li>
			                   <li><u>Aliases</u>     :${responseJson.biography.aliases}
			                   <li><u>Publisher </u>  :${responseJson.biography.publisher}
			                   <li><u>Birth place</u> :${responseJson.biography['place-of-birth']}`

		}
		
	}

	xhrRequest.open('get','https://superheroapi.com/api.php/5235867496463328/'+localStorage.getItem('searchSelected'))
	xhrRequest.send()
}

$('#bttn').click(fetchDetails)
