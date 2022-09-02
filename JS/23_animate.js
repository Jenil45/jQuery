$(document).ready(function(){
    $('#animate').click(function(){
        $('#box').animate({
            left :  '1050px',
            width : '300px' 
        },5000 , function(){
            console.log("first")
        })
        $('#box').animate({
            top :  '150px',
            height : '300px' 
        },5000, function(){
            console.log("second")
        })
        $('#box').animate({
            width : '400px' 
        },5000, function(){
            console.log("third")
        })
    })

    $("#stop").click(function(){
        $('#box').stop(false , true);
    })
})
