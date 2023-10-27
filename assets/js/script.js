// Función para abrir el modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Función para cerrar el modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

// Llama a la función para abrir el modal cuando se carga la página
window.onload = openModal;

//Validacion de Forumulario
function validarFormulario(){
    var login = document.forms["loginForm"]["login"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (login==""){
        alert("el campo de login no puede estar vacio ");
        return false;
    }

    if(!/^[a-zA-Z]+$/.test(login)){
        alert("el login debe contener solo letras");
        return false;
    }

    if(password == ""){
        alert("el campo password no puede estar vacio");
        return false;
    }

    if(password.length < 8){
        alert("el password debe tener al menos 8 caracteres");
        return false;
    }

    return true;
}