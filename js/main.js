$(document).ready(function () {
    $(".ready").fadeOut(3000)
    $("body").css("overflow","auto")
})

//open nav bar
 let boxWidth = $(".items").outerWidth();
 $(".left-cornar").animate({left: `-${boxWidth}`} )


$(".open").click(function () {
  
  
        $(".left-cornar").animate({ left: `0` } , 1000)
        
})

// close navbar
$(".close").click(function () {
    let boxWidth = $(".items").outerWidth();
    if ($(".left-cornar").css("left") == `0px`)
    {
        $(".left-cornar").animate({left: `-${boxWidth}`} ,1000)
    }
    else
    {
        $(".left-cornar").animate({ left: `0` } , 1000)
        }
    
})


/*-------------------------------------------------------------*/
// four div show
$(".first-div h2").click(function () {
 
    $(this).next().slideToggle(600);
    $(".first-div p").not($(this).next()).slideUp(600)
        
})
let myData = new Date(2020, 8, 3).getTime();
//count down function
let countdown = setInterval(function ()
{
    
   
    let nowDate = new Date().getTime();
    let currentDate = myData - nowDate; 
    let days = Math.floor(currentDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((currentDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minates = Math.floor((currentDate % (1000 * 60 * 60)) / (1000 * 60))
    var second = Math.floor((currentDate % (1000 * 60 )) / (1000 ))
    
    document.querySelector(".day").innerHTML = days + "D";
    document.querySelector(".hours").innerHTML = hours + "H";
    document.querySelector(".minates").innerHTML = minates + "M";
    document.querySelector(".second").innerHTML = second + "S";

    if (currentDate < 0)
    {
        clearInterval(countdown);
        $(".day").text(" 00 D");
        $(".hours").text(" 00 H");
        $(".minates").text(" 00 M");
        $(".second").text(" 00 S");

        }
    
}    
) 

$("a").click(function () {
    let getHref = $(this).attr("href");
    let positionLink = $(getHref).offset().top;
    $("html , body").animate({scrollTop : positionLink} , 1000)
})



$("textarea").keyup(function () {
    let numCar = $(this).val().length;
    let currentNum = 100 - numCar;
    if (currentNum < 0)
    {
        $(".number").text("your available character finished");
    }
    else
    {
        $(".number").text(currentNum);
        }

    
})


