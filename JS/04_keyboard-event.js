    $(document).ready(function(){
        $('body').keypress(function(){
            $(this).css('background-color' , 'red');
        });
        $('body').keyup(function(){
            $(this).css('background-color' , 'green');
        });
        $('body').keydown(function(){
            $(this).css('background-color' , 'blue');
        });
    })
