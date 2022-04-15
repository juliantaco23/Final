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
    })
})

const userForm = document.getElementById("user-form")
userForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = userForm["name"];
    const email = userForm["email"];
    const password = userForm["password"];
    console.log("boton");

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
});  