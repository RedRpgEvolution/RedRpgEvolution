
function ocultarRegistro(){
	const formReg = document.getElementById("cont_registro");
	document.getElementById("cont_login").style.display = "block";
	formReg.style.display = "none";
}

function ocultarLogin(){
	const formLogin = document.getElementById("cont_login");
	document.getElementById("cont_registro").style.display = "block";
	formLogin.style.display = "none";	
}