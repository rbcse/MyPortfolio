let menuIcon = document.querySelector("#menu");
let closeIcon = document.querySelector("#close");
let navLinks = document.querySelectorAll(".navbar nav a");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    navLinks.forEach(link => {
        link.style.display = "block";
        link.style.justifyContent = "center";
        link.style.alignItems = "center";
        link.style.flexDirection = "column";
        link.style.marginTop = "2rem";
    });
    navbar.style.height = "50vh";
    navbar.style.width = "100%";
    navbar.style.flexDirection = "column";
    closeIcon.style.position = "absolute";
    closeIcon.style.top = "1.8rem";
    closeIcon.style.right = "1rem";
});

closeIcon.addEventListener("click", () => {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
    navLinks.forEach(link => {
        link.style.display = "none";
    });
    navbar.style.height = "10vh";
    navbar.style.width = "100%";
    navbar.style.flexDirection = "row";
});

