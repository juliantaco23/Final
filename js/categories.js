import {
    onGetPosts,
    deletePost,
    getPost,
    updatePost,
    getPosts,
    isUser,
    showUser,
    logOut,

} from "./firebase.js";

var categorie;
const titleContainer = document.getElementById("categoria");
const categoryContainer = document.getElementById("category-form");

document.getElementById("user").style.display = "none";
document.getElementById("no-user").style.display = "none";
document.getElementById("login").style.display = "none";
document.getElementById("register").style.display = "none";
document.getElementById("addnew").style.display = "none";
document.getElementById("logout").style.display = "none";



document.getElementById('logout').addEventListener('click', function (e) {
    e.preventDefault();
    logOut();
    console.log("cerrando sesion");

});

window.addEventListener("DOMContentLoaded", async (e) =>{
    categorie = localStorage.getItem("categorie")
    titleContainer.innerHTML = categorie

    await onGetPosts((querySnapshot) => {
        var uid = showUser();
        if(uid!=null){
            console.log("Elementos de user")
            document.getElementById("user").style.display = "flex"
            document.getElementById("addnew").style.display = "flex"
            document.getElementById("logout").style.display = "flex"
        } else{
            console.log("Elementos de NO user")
            document.getElementById("no-user").style.display = "flex"
            document.getElementById("login").style.display = "flex"
            document.getElementById("register").style.display = "flex"
        }
        categoryContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const post = doc.data();
            if (post.category == categorie ){
                categoryContainer.innerHTML +=  `
                <div class="col-lg-8">
                    <div class="post-entry-1 lg">
                        <a href="single-post.html"><img src="${post.urlPicture}" alt="" class="img-fluid"></a>
                        <div class="post-meta">
                            <span class="date">${post.category}</span> <span class="mx-1">&bullet;</span> <span>${post.date}</span>
                        </div>
                    </div>
                    <h2><a href="single-post.html">${post.title}</a></h2>
                    <p class="mb-4 d-block">${post.content}</p>

                    <div class="d-flex align-items-center author">
                        <div class="photo">
                            <img src="./img/person-1.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="name">
                            <h3 class="m-0 p-0">${post.author}</h3>
                        </div>
                    </div>
                </div>`;
            }
        });
    });

});
