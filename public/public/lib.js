var internsApp = {};

function logOut(){
		firebase.auth().signOut();
	}
	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}

	function fnCreate(){
		uid = $('#internIDCreate').val();
		var path = 'interns/' + uid;
		var internName = $("#internNameCreate").val();
		var internTeam = $("#internTeamCreate").val()
		var data = {
			name: internName,
			team: internTeam
		}
		fb.data.create(path, data, messageHandler);
	}


function fnUpdate(){
		uid = $('#internID').val();
		var path = 'interns/' + uid;
		var internName = $("#internName").val();
		var internTeam = $("#internTeam").val()
		var data = {
			name: internName,
			team: internTeam
		}
		fb.data.update(path, data, messageHandler);
	}

	function fnDelete(){
		uid = $("#internID").val();
		var path = 'interns/' + uid;
		fb.data.delete(path, messageHandler);
	}

	

(function(){
	function logOut(){
		firebase.auth().signOut();
	}
	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}



	function fnRead(){
		var uid = $("#app_name").val();
		var path = 'App_list/' + uid;
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				console.log(snapShot.val());
				$("#package_name").html(snapShot.val().package_name);
				$("#app_icon").html(snapShot.val().app_icon);
			}
		}
	}

	
	internsApp.Read	= fnRead;
	internsApp.Create = fnCreate;
	internsApp.Update = fnUpdate;
	internsApp.Delete = fnDelete;

	internsApp.logOut = logOut;
})()
