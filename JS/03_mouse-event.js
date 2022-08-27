    $(document).ready(function(){
        $('#box').click(function(){
            $('#box').css('background-color' , 'green');
        })
        $('#box').dblclick(function(){
            $('#box').css('background-color' , 'orange');
        })
        $('#box').contextmenu(function(){
            $('#box').css('background-color' , 'hotpink');
        })
        $('#box').mouseenter(function(){
            $('#box').css('background-color' , 'red');
        })
        $('#box').mouseleave(function(){
            $('#box').css('background-color' , 'purple');
        })
    })
