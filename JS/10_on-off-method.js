$(document).ready(function(){
            $('#box').on({

                "click" : function(){
                    $(this).css('background-color', 'red')
                }
                ,

                "mouseover" : function(){
                    $(this).css('background-color' , 'pink')
                }
                ,
                "mouseout" : function(){
                    $(this).css('background-color', 'lightblue')
                }
            })

            $('#off').click(function(){
                $('#box').off("mouseover mouseout");
            })
        })
