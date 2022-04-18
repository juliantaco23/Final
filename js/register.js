import {
    onGetUsers,
    saveUser,
    deleteUser,
    getUser,
    updateUser,
    getUsers,
    signIn,
} from "./firebase.js"


window.addEventListener("DOMContentLoaded", async (e) =>{
    onGetUsers((querySnapshot) => {
        console.log("registro");
    });
});

const userForm = document.getElementById("user-form")
userForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = userForm["name"];
    const email = userForm["email"];
    const password = userForm["password"];
    const reppassword = userForm["reppassword"];
    console.log("boton");
    if (password.value.length<6){
        window.alert("La contraseña debe tener mas de 6 digitos");
    }
    else if(password.value != reppassword.value){
        window.alert("Las contraseñas deben coincidir");
    }
    else{

        try{
            await saveUser(name.value, email.value, password.value);
            userForm["btn-user-form"].innerText = "Registrado";
            window.alert("Registro exitoso");
            setTimeout(function(){
                window.location.href = "./login.html";
            }, 1000);
        } catch(error){
            console.log(error)
        }
    }
});  