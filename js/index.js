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

document.getElementById('logout').addEventListener('click', function (e) {
  e.preventDefault();
  logOut();
  console.log("cerrando sesion")

});

const postContainer = document.getElementById("slider-form");
const postGrid = document.getElementById("grid-form");
window.addEventListener("DOMContentLoaded", async (e) => {
  chargeSlides();
  chargePostGrid();
});

function chargeSlides() {
  onGetPosts((querySnapshot) => {
    postContainer.innerHTML = "";
    const userid = showUser();
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      console.log(post)
      console.log(post.user_id);
      postContainer.innerHTML += `
              <div class="swiper-slide">
                <a href="single-post.html" class="img-bg d-flex align-items-end" style="background-image: url('${post.urlPicture}');">
                  <div class="img-bg-inner">
                    <h2>${post.title}</h2>
                    <p>${(post.content).substring(0,500)}...</p>
                  </div>
                </a>
              </div>`;

    });
  });
}

function chargePostGrid() {
  onGetPosts((querySnapshot) => {
    postGrid.innerHTML = ""
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      console.log(post)
      console.log(post.user_id);
      postGrid.innerHTML += `
                    <div class="col-lg-4">
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
                            </div>
                    </div>`;
    });
  });
}