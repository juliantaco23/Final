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
        console.log("inicio de sesion");
    })
})

const userForm = document.getElementById("user-form")
userForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = userForm["email"];
    const password = userForm["password"];
    console.log("boton");

    try{
        await signIn(email.value, password.value);
        window.alert("Inicio de sesion exitoso");
        alert("Registro exitoso")
        setTimeout(function(){
            window.location.href = "./index.html";
        }, 1000);
    } catch(error){
        console.log(error)
    }
});  