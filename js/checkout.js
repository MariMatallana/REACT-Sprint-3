
// Exercise 6
  

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expressions = {
	validName: /^[A-Za-z\s]*$/,
	validEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
	validAddress: /[A-Za-z0-9'\.\-\s\,]/,
	validLastN: /^[A-Za-z\s]*$/,
	validPassword: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/,
	validPhone: /^\d{3,14}$/,
}

const validateForm = (e) => {
	switch (e.target.name) {
		case "fName":
			if (expressions.validName.test(e.target.value) && e.target.value.length >= 3) {
					document.getElementById("fName").classList.add("is-valid")
					document.getElementById("fName").classList.remove("is-invalid")
			}
			 else {
				document.getElementById("fName").classList.add("is-invalid")
				document.getElementById("fName").classList.remove("is-valid")
			}
		break;
	}
	switch (e.target.name) {
		case "fEmail":
			if (expressions.validEmail.test(e.target.value) && e.target.value.length >= 3) {
					document.getElementById("fEmail").classList.add("is-valid")
					document.getElementById("fEmail").classList.remove("is-invalid")
			}
			 else {
				document.getElementById("fEmail").classList.add("is-invalid")
				document.getElementById("fEmail").classList.remove("is-valid")
			}
		break;
	}

	switch (e.target.name) {
		case "fAddress":
			if (expressions.validAddress.test(e.target.value) && e.target.value.length >= 3) {
					document.getElementById("fAddress").classList.add("is-valid")
					document.getElementById("fAddress").classList.remove("is-invalid")
			}
			 else {
				document.getElementById("fAddress").classList.add("is-invalid")
				document.getElementById("fAddress").classList.remove("is-valid")
			}
		break;
	}

	switch (e.target.name) {
		case "fLastN":
			if (expressions.validLastN.test(e.target.value) && e.target.value.length >= 3) {
					document.getElementById("fLastN").classList.add("is-valid")
					document.getElementById("fLastN").classList.remove("is-invalid")
			}
			 else {
				document.getElementById("fLastN").classList.add("is-invalid")
				document.getElementById("fLastN").classList.remove("is-valid")
			}
		break;
	}

	switch (e.target.name) {
		case "fPassword":
			if (expressions.validPassword.test(e.target.value) && e.target.value.length >= 3) {
					document.getElementById("fPassword").classList.add("is-valid")
					document.getElementById("fPassword").classList.remove("is-invalid")
			}
			 else {
				document.getElementById("fPassword").classList.add("is-invalid")
				document.getElementById("fPassword").classList.remove("is-valid")
			}
		break;
	}

	switch (e.target.name) {
		case "fPhone":
			if (expressions.validPhone.test(e.target.value) && e.target.value.length == 9) {
					document.getElementById("fPhone").classList.add("is-valid")
					document.getElementById("fPhone").classList.remove("is-invalid")
			}
			 else {
				document.getElementById("fPhone").classList.add("is-invalid")
				document.getElementById("fPhone").classList.remove("is-valid")
			}
		break;
	}
	

}
 
inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
})

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
});

function validate() {
    document.getElementById('formulario').reset();
  }

