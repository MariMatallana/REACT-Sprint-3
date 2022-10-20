
// Exercise 6
function validate() {
	var error = 0;

	let validName = 
	let validEmail = 
	let validAddress = 
	let validLastN = 
	let validPassword = 
	let validPhone = 


	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress")
	var fLastN = document.getElementById("fLastN")
	var fPassword = document.getElementById("fPassword")
	var fPhone = document.getElementById("fPhone")

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail"); 
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == null || fName.length < 3 ){
		error++;
	}

	if(fEmail.value == null || ""){
		error++;
	}
	 
	if(error>0){
		alert("Error. Los datos no son correctos");
	}else{
		alert("OK");
	}

}
