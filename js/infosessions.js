var infoSession;
var API_KEY=""; //put your own api key
var URL="https://api.uwaterloo.ca/v2/resources/infosessions.json?key="
var TEST_FILE="test.json";

//get the JSON file
function getJSON(){
	$.getJSON((URL+API_KEY), function (data){
		console.log(data.meta.requests); //testing purposes
		console.log(data.meta.message); //testing purposes
		infoSession = data.data;
		displaySessions();
	});
}

//log JSON object testing purposes
function logList(){
	console.log(infoSession);
}

//display all info sessions
function displaySessions(){
	var sessionList = document.getElementById("sessionList");
	for (var i=infoSession.length - 1; i >= 0 ; i--){
		var parentItem = document.createElement("p");
		parentItem.setAttribute("id","item"+i)
		parentItem.textContent = infoSession[i].date +" - "+infoSession[i].employer;
		sessionList.appendChild(parentItem);
	}
	for (var i=infoSession.length - 1; i >= 0; i--){
		var parentItem = document.getElementById("item"+i);
		var childItem = document.createElement("div");
		childItem.textContent = infoSession[i].location;
		parentItem.appendChild(childItem);
	}
}

getJSON();
