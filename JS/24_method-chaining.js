$(document).ready(function(){
    $('#animate').click(function(){
        $('#box').css('background' , 'pink').slideUp().slideDown().append("<li>List $</li>");
    })

})
