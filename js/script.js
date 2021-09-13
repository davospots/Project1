$(document).ready(function(){
    $("img[alt=design]").on("click",function(){
        $("img[alt=design").hide();
        $(".para-one").show();
    })
    $(".para-one").on("click",function(){
        $("img[alt=design").show();
        $(".para-one").hide();
    })        


    $("img[alt=dev]").on("click",function(){
        $("img[alt=dev").hide();
        $(".para-two").show();
    })
    $(".para-two").on("click",function(){
        $("img[alt=dev").show();
        $(".para-two").hide();
    }) 
    
    
    $("img[alt=manage]").on("click",function(){
        $("img[alt=manage").hide();
        $(".para-three").show();
    })
    $(".para-three").on("click",function(){
        $("img[alt=manage").show();
        $(".para-three").hide();
    })      


  });