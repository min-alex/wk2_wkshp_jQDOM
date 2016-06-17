$(document).ready(function() {
	$("#submit-button").click(function(event){
		event.preventDefault;
		var pwd = $("#password").val()
		var pwd_valid = false;

		if (pwd == "12345678") {
			pwd_valid = true;
		}

		var usr_valid = false;
		var usr_name = $("#usr").val()
		var length = usr_name.length

		for(var i=0; i < length; i++) {
			if (usr_name.charCodeAt(i) >= 48 && usr_name.charCodeAt(i) <= 57) {
				usr_valid = true;
			}
		}

		if (usr_valid == false) {
			alert("Please enter username with at least 1 number.")
		}
		if (pwd_valid == false) {
			alert("Password incorrect.")
		}
		if(usr_valid == true && pwd_valid == true) {
			alert("yay you got in")
		}
	})

	$(document).keypress(function(event) {
		if (event.charCode >= 48 && event.charCode <= 57) {
			$("#keypresstype").text("number")
		}
		else if (event.charCode >= 97 && event.charCode <= 122) {
			$("#keypresstype").text("letter")
		}
	})
})