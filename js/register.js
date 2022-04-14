import {
    onGetUsers,
    saveUser,
    deleteUser,
    getUser,
    updateUser,
    getUsers,
} from "./firebase.js"


window.addEventListener("DOMContentLoaded", async (e) =>{
    onGetUsers((querySnapshot) => {
        
    })
})