$(document).ready(function(){
    $('#clickbtn').click(function(){
        $('#box h2').text("This is for testing");
        $('#box p').html("This is for testing <b>lorem20</b>");
        $('#box h2').attr("class" , "red")
    })
 });
