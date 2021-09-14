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
        //Portfolio section working on the hover effect

    $("img[alt=photo1").hover(function(){
        $(".text-a").toggle();
    });

    $("img[alt=photo2").hover(function(){
        $(".text-b").toggle()
    });

    $("img[alt=photo3").hover(function(){
        $(".text-c").toggle()
    });

    $("img[alt=photo4").hover(function(){
        $(".text-d").toggle()
    });

    $("img[alt=photo5").hover(function(){
        $(".text-e").toggle()
    });

    $("img[alt=photo6").hover(function(){
        $(".text-f").toggle()
    });

    $("img[alt=photo7").hover(function(){
        $(".text-g").toggle()
    });

    $("img[alt=photo8").hover(function(){
        $(".text-h").toggle()
    });

const form = document.getElementById("forms");
forms.addEventListener("submit", (e) =>{

    e.preventDefault();

    alert("Your form has been submitted ,Thank you")
})



  });