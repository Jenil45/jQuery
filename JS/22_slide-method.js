$(document).ready(function(){
    $('#SlideUp').click(function(){
        $('#box').slideUp(1000)
    })

    $('#SlideDown').click(function(){
        $('#box').slideDown(2000)
    })

    $('#SlideToggle').click(function(){
        $('#box').slideToggle(500 , function(){
            console.log("This is  classtoggle")
        })
    })
})
