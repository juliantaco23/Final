import {
    onGetPosts,
    deletePost,
    getPost,
    updatePost,
    getPosts,
    isUser,
    showUser,

} from "./firebase.js";

const postContainer = document.getElementById("posts-container");
const postForm = document.getElementById("post-form");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
    await onGetPosts((querySnapshot) => {
        postContainer.innerHTML = "";
        const userid = showUser();
        querySnapshot.forEach((doc) => {
            const post = doc.data();
            console.log(post)
            console.log(post.user_id);
            if (post.user_id == userid ){
                postContainer.innerHTML +=  `
                <h2> Mis noticias </h2>
                <div class="col-lg-4">
                    <div class="post-entry-1 lg">
                    <a href="single-post.html"><img src="Final/img/post-landscape-1.jpg" alt="" class="img-fluid"></a>
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
                        <button style="margin-right: 20px; margin-top: 20px;" class="btn btn-secondary btn-edit" data-id="${doc.id}" style>
                        🖉 Edit
                        </button>
                    </div>
                    </div>
                </div>`;
            }
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
    
        const btnsEdit = postContainer.querySelectorAll(".btn-edit");
        btnsEdit.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            try {
              const doc = await getPost(e.target.dataset.id);
              const post = doc.data();
              postForm["title"].value = post.title;
              postForm["author"].value = post.author;
              postForm["newsletter"].value = post.source;
              postForm["publication-date"].value = post.date;
              postForm["category"].value = post.category;
              postForm["content"].value = post.content;
    
              editStatus = true;
              id = doc.id;
              postForm["btn-post-form"].innerText = "Update";
            } catch (error) {
              console.log(error);
            }
          });
        });        
    });
});


postForm.addEventListener("submit", async (e) =>{
    e.preventDefault();

    const title = postForm["title"];
    const author = postForm["author"];
    const source = postForm["newsletter"];
    const date = postForm["publication-date"];
    const category = document.getElementById('category').options[document.getElementById('category').selectedIndex].text;
    const content = postForm["content"];
    console.log("registro post");
    try{
        if(!editStatus){
            await isUser(title.value, author.value, source.value, date.value, category, content.value);
            window.alert("Noticia añadida exitosamente");
        } else {
            await updatePost(id, {
                title: title.value, author: author.value, source: source.value, date: date.value, category: category, content: content.value
              });
        
              editStatus = false;
              id = "";
              postForm["btn-post-form"].innerText = "Subir";
        }
    } catch(error){
        console.log(error)
    }
})