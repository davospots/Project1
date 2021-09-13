$(document).ready(function(){
    $(".para-one").hide();
    $(".para-two").hide();
    $(".para-three").hide();
    $(".text-a, .text-b, .text-c, .text-d, .text-e, .text-f, .text-g, .text-h ").hide();

    
    $("img[alt=design]").on("click",function(){
        $("img[alt=design]").hide();
        $(".para-one").show();
        
    })

    $(".para-one ,.head-one").on("click",function(){
        $("img[alt=design]").show();
        $(".para-one").hide();
    })        


    $("img[alt=dev]").on("click",function(){
        $("img[alt=dev]").hide();
        $(".para-two").show();
    })

    $(".para-two, .head-two").on("click",function(){
        $("img[alt=dev]").show();
        $(".para-two").hide();
    }) 
    
    

    $("img[alt=manage]").on("click",function(){
        $("img[alt=manage]").hide();
        $(".para-three").show();
    })

    $(".para-three, .head-three").on("click",function(){
        $("img[alt=manage]").show();
        $(".para-three").hide();
    })      

    $(".img-and-text-wrapper > .img").hover(function(){
        $(".text").show()
    });


  });