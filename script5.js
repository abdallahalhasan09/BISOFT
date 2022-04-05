function menuOpen(){
    
    var myHeader = document.getElementById("myHeader");
    var NewMenu = document.getElementById("Menu");
    myHeader.style.display="none";
    NewMenu.style.display="block";
}

function menuClose(){
    var myHeader = document.getElementById("myHeader");
    var NewMenu = document.getElementById("Menu");
    myHeader.style.display="block";
    NewMenu.style.display="none";
}

$(document).ready(function(){
    $("#signup").click(function(){
        $(".signup").css("display","block");
        $(".login").css("display","none");
        $("#signup").css({
            "margin": "30px 0 0 0",
            "border": "1px solid rgb(173, 173, 173)",
            "padding": "20px 230px",
            "font-size": "18px",
            "background-color": "white",
            "border-bottom": "none"
        })
        $("#login").css({
            "border": "1px solid rgb(173, 173, 173)",
            "background-color": "rgb(239, 239, 239)",
            "border-bottom": "1px solid rgb(173, 173, 173)"
        })
    })
})

$(document).ready(function(){
    $("#login").click(function(){
        $(".login").css("display","block");
        $(".signup").css("display","none");
        $("#login").css({
            "margin": "30px 0 0 0",
            "border": "1px solid rgb(173, 173, 173)",
            "padding": "20px 230px",
            "font-size": "18px",
            "background-color": "white",
            "border-bottom": "none"
        })
        $("#signup").css({
            "border": "1px solid rgb(173, 173, 173)",
            "background-color": "rgb(239, 239, 239)",
            "border-bottom": "1px solid rgb(173, 173, 173)"
        })
    })
})
