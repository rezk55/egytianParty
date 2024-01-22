
$(document).ready(function(){

    // show nav 
    $(".btn-menu").on("click",function(){
        $('nav').css({
            "transform":"translateX(0)",
        });
    })
    // close nav 
    $(".close").on("click",function(){
        $('nav').css({
            "transform":"translateX(-100%)",
        });
    })

    
    // $(window).on('scroll',function(){
    //     let scroll = $(window).scrollTop();

    // })

    $(".menu a").on("click",function(){
        let aHref = $(this).attr('href');
        let sectionOffset = $(aHref).offset().top; 
        $('html','body').animate({scrollTop:sectionOffset},2000);

    })


    //show and hide singer
    $(".btn-singer").on('click', function() {
        $(this).parent().find('p').slideToggle(300);
    })

    function wait(event){
        let now = $.now();
        let eventInseconds = new Date(event);
        let def = eventInseconds - now ;
        let days = Math.floor((def/86400000));
        let hours = Math.floor((def%86400000)/3600000);
        let mins = Math.floor(((def%86400000)%3600000)/60000);
        let seconds = Math.floor((((def%86400000)%3600000)%60000)/1000);
        $(".seconds").children().text(seconds);
        $(".min").children().text(mins);
        $(".hours").children().text(hours);
        $(".day").children().text(days);
    }
    let event = "18 February 2024 2:00:00";
    setInterval(function(){
       wait(event);
    },1000);
    
    $('#myMessage').keyup(function(){
        let message = $("#myMessage").val();
        let sizeOfMess = message.length;
        let reamining = 100 - sizeOfMess;
        
        if(reamining>=0){
            $("#limitMess").text(reamining);
        } else {
            $("#limitMess").text("your available character finished");
        }
    })
   


});