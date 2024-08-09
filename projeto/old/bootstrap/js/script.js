if (window.innerWidth > 1269) {
  window.onscroll = function() {myFunction()};


  var header = document.getElementById("header");


  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
var x = document.getElementById("celularmenu");
x.style.display = "none";
function botao() {
  if (x.style.display == "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
} 