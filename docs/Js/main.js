
function login(){
    let user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if(user == "bit" && password == "2023"){
        Swal.fire(
            '!Excelente!',
            'Ahora presiona CONTINUAR',
            'success'
          );
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los datos que ingresaste no son correctos!',
            footer: 'Inténtalo de nuevo'
          })
    }  
}

function check(){
    let user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if(user == "bit" && password == "2023"){
        window.location = "index2.html";
    } else{
        Swal.fire(
            '¡Hey!',
            'Valida tus datos primero',
            'warning'
          )
    }  
}


