document.getElementById("politica-category").addEventListener('click',async (e) =>{
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("categorie", "Politica y Economia");
      } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
    window.location.href = "./categories.html";
});

document.getElementById("deportes-category").addEventListener('click',async (e) =>{
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("categorie", "Deportes");
      } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
    window.location.href = "./categories.html";
});

document.getElementById("ciencia-category").addEventListener('click',async (e) =>{
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("categorie", "Tecnologia y Ciencia");
      } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
    window.location.href = "./categories.html";
});

document.getElementById("entretenimiento-category").addEventListener('click',async (e) =>{
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("categorie", "Entretenimiento");
      } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
    window.location.href = "./categories.html";
});
