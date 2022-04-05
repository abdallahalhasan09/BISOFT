// header toogle
$(function () {
  $("#nav-icon").on("click", function () {
    $("#lists").slideToggle("fast");
  });
});
// header toogle end

// ***********************************************

// auth

var modal = document.getElementById("myModal");
$(function () {
  $("#nav-icon").click(function () {
    $("#lists").slideToggle("slow");
  });
});

// span.onclick = function () {
//   modal.style.display = "none";
// };

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// up button
//Get the button:
mybutton = document.getElementById("myBtn1");

// When the user scrolls down 20px from the top of the document, show the button
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// start featur

let featur_section = document.querySelector(".featur");

let featur_conainer = document.querySelectorAll(".featur");

// TEAM
let section = document.querySelector(".testimonilas");

let team_container = document.querySelectorAll(".testimonilas div");

// start why us
let why_us_section = document.querySelector(".why-us");

let why_us_box1 = document.querySelectorAll(".why-us .box1");

let why_us_box2 = document.querySelectorAll(".why-us .box2");
let why_us_box3 = document.querySelectorAll(".why-us .box3");

window.onscroll = function () {
  // TEAM
  if (window.scrollY >= section.offsetTop - 500) {
    team_container.forEach((div) => {
      div.style.left = div.dataset.left;
    });
  }
  // start featur
  if (window.scrollY >= featur_section.offsetTop - 300) {
    featur_conainer.forEach((div) => {
      div.style.opacity = "1";
    });
  }

  // start why us

  if (window.scrollY >= why_us_section.offsetTop) {
    why_us_box1.forEach((div) => {
      div.style.left = div.dataset.left;
    });
    why_us_box2.forEach((div) => {
      div.style.left = div.dataset.left;
    });
    why_us_box3.forEach((div) => {
      div.style.left = div.dataset.left;
    });
  }

  // end why us
};

$(function () {
  $("#nav-icon").click(function () {
    $("#lists").slideToggle("slow");
  });
});

$("#all").click(function () {
  console.log("hi");
  $("#galery1").show();
  $("#des").removeAttr("class");
  $("#code").removeAttr("class");
  $("#app").removeAttr("class");
  $("#photo").removeAttr("class");
  $("#all").attr("class", "f-active");

  $("#galery2").css({ display: "none" });
  $("#galery3").css({ display: "none" });
  $("#galery4").css({ display: "none" });
  $("#galery5").css({ display: "none" });
});

$("#des").click(function () {
  console.log("hi");
  $("#galery2").show();
  $("#galery1").css({ display: "none" });
  $("#all").removeAttr("class");
  $("#code").removeAttr("class");
  $("#app").removeAttr("class");
  $("#photo").removeAttr("class");
  $("#des").attr("class", "f-active");

  $("#galery1").css({ display: "none" });
  $("#galery3").css({ display: "none" });
  $("#galery4").css({ display: "none" });
  $("#galery5").css({ display: "none" });
});

$("#code").click(function () {
  console.log("hi");
  $("#galery3").show();
  $("#code").attr("class", "f-active");

  $("#all").removeAttr("class");
  $("#des").removeAttr("class");
  $("#app").removeAttr("class");
  $("#photo").removeAttr("class");
  $("#code").attr("class", "f-active");

  $("#galery1").css({ display: "none" });
  $("#galery2").css({ display: "none" });
  $("#galery4").css({ display: "none" });
  $("#galery5").css({ display: "none" });
});
$("#photo").click(function () {
  $("#galery4").show();

  $("#all").removeAttr("class");
  $("#des").removeAttr("class");
  $("#app").removeAttr("class");
  $("#code").removeAttr("class");
  $("#photo").attr("class", "f-active");

  $("#galery1").css({ display: "none" });
  $("#galery2").css({ display: "none" });
  $("#galery5").css({ display: "none" });
  $("#galery3").css({ display: "none" });
});
$("#app").click(function () {
  console.log("hi");
  $("#galery5").show();

  $("#all").removeAttr("class");
  $("#des").removeAttr("class");
  $("#photo").removeAttr("class");
  $("#code").removeAttr("class");
  $("#app").attr("class", "f-active");

  $("#galery1").css({ display: "none" });
  $("#galery2").css({ display: "none" });
  $("#galery3").css({ display: "none" });
  $("#galery4").css({ display: "none" });
});
$("#more").click(function () {
  $("#galery3").slideToggle("3000").css({ display: "block" });
});

// end featur
