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

const postContainer = document.getElementById("main");
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
            <section id="hero-slider" class="hero-slider">
            <div class="container-md" data-aos="fade-in">
              <div class="row">
                <div class="col-12">
                  <div class="swiper sliderFeaturedPosts">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="single-post.html" class="img-bg d-flex align-items-end" style="background-image: url('Final/img/post-slide-1.jpg');">
                          <div class="img-bg-inner">
                            <h2>${post.title}</h2>
                            <p>${post.content}.</p>
                          </div>
                        </a>
                      </div>
      
                    <div class="custom-swiper-button-next">
                      <span class="bi-chevron-right"></span>
                    </div>
                    <div class="custom-swiper-button-prev">
                      <span class="bi-chevron-left"></span>
                    </div>
      
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </section><!-- End Hero Slider Section -->`;

        });
    });
}

function chargePostGrid() {
    onGetPosts((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const post = doc.data();
            console.log(post)
            console.log(post.user_id);
            postContainer.innerHTML += `
            <section id="posts" class="posts">
                <div class="container aos-init aos-animate" data-aos="fade-up">
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
                            </div>
                    </div>
                </div>
            </section>`;
        });
    });
}