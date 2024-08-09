window.onscroll = function () {
  addSticky();
};

var header = document.querySelector("header");

var sticky = header.offsetTop;

var placeholder = document.createElement("div");
placeholder.style.height = header.offsetHeight + "px";
header.parentNode.insertBefore(placeholder, header);
placeholder.style.display = "none";

function addSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    placeholder.style.display = "block";
  } else {
    header.classList.remove("sticky");
    placeholder.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var celularmenu = document.querySelector(".cel_navbar");
celularmenu.style.display = "none";

function celularnavbar() {
  console.log(celularmenu);
  if (celularmenu.style.display == "none") {
    celularmenu.style.display = "flex";
  } else {
    celularmenu.style.display = "none";
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 1100) {
    celularmenu.style.display = "none";
  }
});

var navLinks = document.querySelectorAll(".cel_navbar .navbar_link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closenavbar();
  });
});

function closenavbar() {
  celularmenu.style.display = "none";
}
