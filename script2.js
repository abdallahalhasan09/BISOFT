function menuOpen() {
  var myHeader = document.getElementById("myHeader");
  var NewMenu = document.getElementById("Menu");
  myHeader.style.display = "none";
  NewMenu.style.display = "block";
}

function menuClose() {
  var myHeader = document.getElementById("myHeader");
  var NewMenu = document.getElementById("Menu");
  myHeader.style.display = "block";
  NewMenu.style.display = "none";
}

$(document).ready(function () {
  var game = false;
  var web = false;
  var android = false;
  var database = false;
  var coding = false;
  $("#games").click(function () {
    if (web == true || android == true || database == true || coding == true) {
      $("#webslide").slideUp("slow");
      $("#fweb").css("background-color", "white");
      web = false;
      $("#androidslide").slideUp("slow");
      $("#fandroid").css("background-color", "white");
      android = false;
      $("#databaseslide").slideUp("slow");
      $("#fdatabase").css("background-color", "white");
      database = false;
      $("#codingslide").slideUp("slow");
      $("#fcode").css("background-color", "white");
      coding = false;
    }
    if (game == false) {
      $("#gameslide").slideDown("slow");
      $("#fgame").css("background-color", "#6c757d");
      game = true;
    } else if (game == true) {
      $("#gameslide").slideUp("slow");
      $("#fgame").css("background-color", "white");
      game = false;
    }
  });

  $("#web").click(function () {
    if (game == true || android == true || database == true || coding == true) {
      $("#gameslide").slideUp("slow");
      $("#fgame").css("background-color", "white");
      game = false;
      $("#androidslide").slideUp("slow");
      $("#fandroid").css("background-color", "white");
      android = false;
      $("#databaseslide").slideUp("slow");
      $("#fdatabase").css("background-color", "white");
      database = false;
      $("#codingslide").slideUp("slow");
      $("#fcode").css("background-color", "white");
      coding = false;
    }
    if (web == false) {
      $("#webslide").slideDown("slow");
      $("#fweb").css("background-color", "#000");
      web = true;
    } else if (web == true) {
      $("#webslide").slideUp("slow");
      $("#fweb").css("background-color", "white");
      web = false;
    }
  });

  $("#android").click(function () {
    if (game == true || web == true || database == true || coding == true) {
      $("#gameslide").slideUp("slow");
      $("#fgame").css("background-color", "white");
      game = false;
      $("#webslide").slideUp("slow");
      $("#fweb").css("background-color", "white");
      web = false;
      $("#databaseslide").slideUp("slow");
      $("#fdatabase").css("background-color", "white");
      database = false;
      $("#codingslide").slideUp("slow");
      $("#fcode").css("background-color", "white");
      coding = false;
    }
    if (android == false) {
      $("#androidslide").slideDown("slow");
      $("#fandroid").css("background-color", "#6DFF50");
      android = true;
    } else if (android == true) {
      $("#androidslide").slideUp("slow");
      $("#fandroid").css("background-color", "white");
      android = false;
    }
  });

  $("#database").click(function () {
    if (game == true || web == true || android == true || coding == true) {
      $("#gameslide").slideUp("slow");
      $("#fgame").css("background-color", "white");
      game = false;
      $("#webslide").slideUp("slow");
      $("#fweb").css("background-color", "white");
      web = false;
      $("#androidslide").slideUp("slow");
      $("#fandroid").css("background-color", "white");
      android = false;
      $("#codingslide").slideUp("slow");
      $("#fcode").css("background-color", "white");
      coding = false;
    }
    if (database == false) {
      $("#databaseslide").slideDown("slow");
      $("#fdatabase").css("background-color", "yellow");
      database = true;
    } else if (database == true) {
      $("#databaseslide").slideUp("slow");
      $("#fdatabase").css("background-color", "white");
      database = false;
    }
  });

  $("#code").click(function () {
    if (game == true || web == true || android == true || database == true) {
      $("#gameslide").slideUp("slow");
      $("#fgame").css("background-color", "white");
      game = false;
      $("#webslide").slideUp("slow");
      $("#fweb").css("background-color", "white");
      web = false;
      $("#androidslide").slideUp("slow");
      $("#fandroid").css("background-color", "white");
      android = false;
      $("#databaseslide").slideUp("slow");
      $("#fdatabase").css("background-color", "white");
      database = false;
    }
    if (coding == false) {
      $("#codingslide").slideDown("slow");
      $("#fcode").css("background-color", "red");
      coding = true;
    } else if (coding == true) {
      $("#codingslide").slideUp("slow");
      $("#fcode").css("background-color", "white");
      coding = false;
    }
  });
});

$(document).ready(function () {
  var boo = false;
  $("#web").click(function () {
    if (boo == false) {
      $("#webslide").slideDown("slow");
      $("#fweb").css("background-color", "#043674");
      boo = true;
    } else if (boo == true) {
      $("#webslide").slideUp("slow");
      $("#fweb").css("background-color", "white");
      boo = false;
    }
  });
});

$(document).ready(function () {
  $("#showProfile").click(function () {
    $("#profile").slideDown("slow");
  });
});
