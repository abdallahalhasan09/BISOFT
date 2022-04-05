$(document).ready(function(){
    $("#personal").click(function(){
        $(".home").hide();
        $(".clientsclass").hide();
        $(".projectclass").hide();
        $(".earningclass").hide();
        $(".debtclass").hide();
        $(".personalclass").css("display","flex");
        
    })
})

$(document).ready(function(){
    $("#clients").click(function(){
        $(".home").hide();
        $(".clientsclass").show();
        $(".projectclass").hide();
        $(".earningclass").hide();
        $(".debtclass").hide();
        $(".personalclass").hide();
        
    })
})

$(document).ready(function(){
    $("#projects").click(function(){
        $(".home").hide();
        $(".clientsclass").hide();
        $(".projectclass").show();
        $(".earningclass").hide();
        $(".debtclass").hide();
        $(".personalclass").hide();
        
    })
})

$(document).ready(function(){
    $("#earnings").click(function(){
        $(".home").hide();
        $(".clientsclass").hide();
        $(".projectclass").hide();
        $(".earningclass").show();
        $(".debtclass").hide();
        $(".personalclass").hide();
        
    })
})

$(document).ready(function(){
    $("#debts").click(function(){
        
        $(".home").hide();
        $(".clientsclass").hide();
        $(".projectclass").hide();
        $(".earningclass").hide();
        $(".debtclass").show();
        $(".personalclass").hide(); 
    })
    
})

$(document).ready(function(){
    $("#home").click(function(){
        $(".home").show();
        $(".clientsclass").hide();
        $(".projectclass").hide();
        $(".earningclass").hide();
        $(".debtclass").hide();
        $(".personalclass").hide(); 
    })
    
})

$(document).ready(function(){
    $("#notification").click(function(){
        alert("You don have any notifications");
    })
})


$(document).ready(function(){
    $("#Signout").click(function(){
        
    })
})
