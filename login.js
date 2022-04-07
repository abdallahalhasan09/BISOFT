$(document).ready(function(){
    $("#log-in").click(function(){
        $(".log-in-containt").css("display","flex");
        $(".sign-up-containt").css("display","none");
        $("#log-in").css("border-bottom","none");
        $("#sign-up").css("border-bottom","1px solid black");
    });
});

$(document).ready(function(){
    $("#sign-up").click(function(){
        $(".log-in-containt").css("display","none");
        $(".sign-up-containt").css("display","flex");
        $("#sign-up").css("border-bottom","none");
        $("#log-in").css("border-bottom","1px solid black");
    });
});