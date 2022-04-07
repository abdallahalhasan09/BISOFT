$(document).ready(function(){
    $("#menu").click(function(){
        $(".hidden").slideToggle();
    });
});

$(document).ready(function(){
    $("#personal-information").click(function(){
        $(".pis").show();
        $("#message-section").hide();
        $(".my-projects-section").hide();
        $(".clients-section").hide();
        $(".hidden").slideUp();
    })
})

$(document).ready(function(){
    $("#clients").click(function(){
        $(".pis").hide();
        $("#message-section").hide();
        $(".my-projects-section").hide();
        $(".clients-section").show();
        $(".hidden").slideUp();
    })
})

$(document).ready(function(){
    $("#to-main").click(function(){
        $(".pis").hide();
        $("#message-section").show();
        $(".my-projects-section").hide();
        $(".clients-section").hide();
        $(".hidden").slideUp();
    })
})

$(document).ready(function(){
    $("#my-projects").click(function(){
        $(".pis").hide();
        $("#message-section").hide();
        $(".my-projects-section").show();
        $(".clients-section").hide();
        $(".hidden").slideUp();
    })
})
