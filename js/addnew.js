import {
    onGetPosts,
    deletePost,
    getPost,
    updatePost,
    getPosts,
    isUser,

} from "./firebase.js"

const postForm = document.getElementById("post-form")
postForm.addEventListener("submit", async (e) =>{
    e.preventDefault();

    const title = postForm["title"];
    const author = postForm["author"];
    const source = postForm["newsletter"];
    const date = postForm["publication-date"];
    const category = document.getElementById('category').options[document.getElementById('category').selectedIndex];
    //Category
    console.log("registro post");
    try{
        await isUser(title.value, author.value, source.value, date.value, category.value);
        window.alert("Noticia añadida exitosamente");
    } catch(error){
        console.log(error)
    }
})