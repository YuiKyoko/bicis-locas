function validateForm(){
		//nombre
    var nom = document.getElementById("name").value;
    if( nom == null || nom.length == 0 || nom == ""){
      alert("Escribe un nombre.");
    }else if ( /[0-9]/.test(nom)){
        alert("nN ingrese números.")
    }else if ( /^[a-z]/.test(nom.charAt(0)) ){
        alert ("escriba el primer caracter en mayuscula")
    }
    //apellido
    var apellido = document.getElementById("lastname").value;
    if( apellido == null || apellido.length == 0 || apellido == ""){
      alert("Escribe tu aºpellido.");
    }else if ( /[0-9]/.test(apellido)){
        alert("No ingrese números.")
    }else if ( /^[a-z]/.test(apellido.charAt(0)) ){
        alert ("Escriba el primer caracter en mayúscula.")
    }
    //correo
    var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    cor = document.getElementById("input-email").value;
    if(!emailRegex.test(cor)) {
        alert("Ingrese un correo válido.");
    };
    //contraseña
    var contr = document.getElementById("input-password").value;
    if (contr.length <= 6 || contr.length == 0 || contr == "123456" || contr == "98754" || contr == "password" ) {
        alert("Contraseña no válida."); 
    }
    //select
    var opcion = document.querySelector("select").selectedIndex;
		if( opcion == null || opcion == "" ) {
		alert("Por favor, seleccione una opción en checkbox.");
	}

	return true;      
}