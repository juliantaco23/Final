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
        
    } catch(error){
        console.log(error)
    }
});  