// nav
var drop = document.querySelector(".drop-but");

var dropList = document.getElementById("drop-list1");

drop.addEventListener("click", function () {
  dropList.classList.toggle("nav-toggle");
});
window.addEventListener("scroll", function () {
  var header = this.document.querySelector(".header-content");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// kategori

var row_kat_but1 = document.getElementById("kat_bt1");

var row_kat1 = document.getElementById("row-kat1");

row_kat_but1.addEventListener("click", function () {
  row_kat1.classList.toggle("row-kat1");
});

var row_kat_but2 = document.getElementById("kat_bt2");

var row_kat2 = document.getElementById("row-kat2");

row_kat_but2.addEventListener("click", function () {
  row_kat2.classList.toggle("row-kat2");
});

var row_kat_but3 = document.getElementById("kat_bt3");

var row_kat3 = document.getElementById("row-kat3");

row_kat_but3.addEventListener("click", function () {
  row_kat3.classList.toggle("row-kat3");
});
var row_kat_but4 = document.getElementById("kat_bt4");

var row_kat4 = document.getElementById("row-kat4");

row_kat_but4.addEventListener("click", function () {
  row_kat4.classList.toggle("row-kat4");
});

// up button

mybutton = document.getElementById("myBtn1");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
