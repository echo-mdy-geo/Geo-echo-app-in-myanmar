$(document).ready(function(){
	var database = firebase.database().ref().child("appslist");
	database.on("child_added", snap => {
		var package_name = snap.child("package_name").val();
		
		$("#appslist").append("<tr><td>"+ package_name + "</td></tr>");

	});
});