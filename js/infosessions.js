var infoSession;
var API_KEY=""; //put your own api key
var URL="https://api.uwaterloo.ca/v2/resources/infosessions.json?key="
var TEST_FILE="test.json";

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

//display all info sessions
function displaySessions(){
	var sessionList = document.getElementById("sessionList");

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

}

getJSON();