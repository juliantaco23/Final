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

const postContainer = document.getElementById("posts-container");

document.getElementById('logout').addEventListener('click', function (e) {
    e.preventDefault();
    logOut();
    console.log("cerrando sesion")

});

window.addEventListener("DOMContentLoaded", async (e) => {
    await onGetPosts((querySnapshot) => {
        postContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const post = doc.data();
                postContainer.innerHTML +=  `
                <h2> Mis noticias </h2>
                <div class="col-lg-8">
                    <div class="post-entry-1 lg">
                    <a href="single-post.html"><img src="${post.urlPicture}" alt="" class="img-fluid"></a>
                    <div class="post-meta"><span class="date">${post.category}</span> <span class="mx-1">&bullet;</span> <span>${post.date}</span></div>
                    <h2><a href="single-post.html">${post.title}</a></h2>
                    <p class="mb-4 d-block">${post.content}</p>

                    <div class="d-flex align-items-center author">
                        <div class="photo"><img src="Final/img/person-1.jpg" alt="" class="img-fluid"></div>
                        <div class="name">
                        <h3 class="m-0 p-0">${post.author}</h3>
                        </div>
                    </div>

                    <div class="d-flex align-items-center">
                        <button style="margin-right: 20px; margin-top: 20px;" class="btn btn-primary btn-delete" data-id="${doc.id}">
                        🗑 Delete
                        </button>
                    </div>
                    </div>
                </div>`;
        });

        const btnsDelete = postContainer.querySelectorAll(".btn-delete");
        btnsDelete.forEach((btn) =>
          btn.addEventListener("click", async ({ target: { dataset } }) => {
            try {
              await deletePost(dataset.id);
            } catch (error) {
              console.log(error);
            }
          })
        );        
    });
});
