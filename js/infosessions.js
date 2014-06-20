var infoSession;
var API_KEY=""; //put your own api key
var URL="https://api.uwaterloo.ca/v2/resources/infosessions.json?key="
var TEST_FILE="test.json";
var itsdone = false
var str;
var audience;
var audiencetemp;
var arr = [];

//get the JSON file
function getJSON(){
	//$.getJSON((TEST_FILE), function (data){
	$.getJSON((URL+API_KEY), function (data){
		console.log(data.meta.requests); //testing purposes
		console.log(data.meta.message); //testing purposes
		infoSession = data.data;
		displaySessions();
	});
}

function addcombobox(){
var combo = document.getElementById("combo");
	if(itsdone === false){

var programs = new Array('NONE','MATH - Computer Science','ENG - Electrical', 'ENG - System Design');

     for (var i = 0; i < programs.length; i++){

    var option = document.createElement("option");

    option.text = programs[i];
    option.value = programs[i];
    try {
        combo.add(option, null); //Standard 
    }catch(error) {
    	
        combo.add(option); // IE only

    	}
  itsdone = true
		}
	}


}

function combochange(){
	str = (combo.options[combo.selectedIndex].value)
	//alert(str);

	if(str === 'NONE'){
	getJSON()
		displaySessions();
	}else{

	$.getJSON((URL+API_KEY), function (data){
    audience = data.data;
   filtering()

 
	});




	}

	
}
//display all info sessions

function filtering(){

	for(var i = 0; i < audience.length; i ++){
		if(audience[i].programs.search(str) != -1){
			arr.push(audience[i]);
		}else{
			audience.splice(i,1);
		}
	}
	infoSession = arr;

	displaySessions();
	
}


function displaySessions(){
	var sessionList = document.getElementById("sessionList");
var e = document.getElementById("combo");

document.getElementById("sessionList").innerHTML = "";

	for (var i=infoSession.length - 1; i >= 0 ; i--){
		//parent item div
		var parentItem = document.createElement("div");
		parentItem.setAttribute("id","parentItem"+i);
		parentItem.setAttribute("class","parentItem");
		sessionList.appendChild(parentItem);
		//Employer
		var employer = document.createElement("h4");
		employer.setAttribute("class","employer");
		employer.textContent = infoSession[i].employer;
		parentItem.appendChild(employer);
		//Date
		var date = document.createElement("h5");
		date.setAttribute("class","date");
		date.textContent = infoSession[i].date;
		parentItem.appendChild(date);

		//child item div
		var childItem = document.createElement("div");
		childItem.setAttribute("id","childItem"+i);
		childItem.setAttribute("class","childItem")
		parentItem.appendChild(childItem)
		//Time
		var time = document.createElement("p");
		time.setAttribute("class","time");
		time.textContent = "Time: " + infoSession[i].start_time + " - " + infoSession[i].end_time;
		childItem.appendChild(time);
		//Location
		var location = document.createElement("p");
		location.setAttribute("class","location");
		location.textContent = "Location: " + infoSession[i].location;
		childItem.appendChild(location);
		//website
		var website = document.createElement("p");
		website.setAttribute("class", "website");
		website.textContent = "Website: " + infoSession[i].website;
		childItem.appendChild(website);
		//audience
		var audience = document.createElement("p");
		audience.setAttribute("class", "audience");
		audience.textContent = "Audience: " + infoSession[i].audience;
		childItem.appendChild(audience);
		//programs
		var programs = document.createElement("p");
		programs.setAttribute("class", "programs");
		programs.textContent = "Programs: " + infoSession[i].programs;
		childItem.appendChild(programs);
		//description
		var description = document.createElement("p");
		description.setAttribute("class", "description");
		description.textContent = "Description: " + infoSession[i].programs;
		childItem.appendChild(description);
	}
		infoSession = [];
		audience = [];
		arr = [];
}



