    $(document).ready(function(){

    $('#sname , #stext , #scountry').focus(function(){
        $(this).css('background-color' , 'lime');
    })

    $('#sname , #stext , #scountry').blur(function(){
        $(this).css('background-color' , '');
    })

    $('#scountry').change(function(){
        $(this).css('background-color' , 'pink');

        var a = $(this).val();
        $('#test').html(a);
    })

    $('#sform').submit(function(){
        var name = $('#sname').val();
        alert("Hello " + name);
    })
    });
