
$(document).ready(function(){
	var database = firebase.database().ref().child("App_list");
	database.on("child_added", snap => {
		var app_name = snap.child("app_name").val();
		
		$("#App_list").append("<tr><td>"+ app_name + "</td></tr>");

	});
});

fb = {};
fb = firebase;
function fnRead(path, successFunction, errorFunction){
	if(!path || !successFunction || !errorFunction) return;
	fb.database().ref(path).once('value').then(successFunction, errorFunction);
}
fb.data = {
	
	read: fnRead,
	
}






