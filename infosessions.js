var infoSession;

function getList(){
	//put your own key
	$.getJSON("https://api.uwaterloo.ca/v2/resources/infosessions.json?key=", function (data){
		infoSession = data.data;
		console.log("got the list");
	});
}

function showList(){
	console.log(infoSession);
}

function showEmployers(){
	for (var i = 0; i < infoSession.length; i++){
		console.log(infoSession[i].employer);
	}
}

