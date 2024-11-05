document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburgur");
    const navBar = document.querySelector(".top-nav ul");

    hamburger.onclick = function() {
        navBar.classList.toggle("show");
    };
});
