$(document).ready(function(){
            $('#append').click(function(){
                $('#ol').append("<li>List $</li>")
            })

            $('#prepend').click(function(){
                $('#box').prepend("<h2>This is prepend</h2>")
            })
        })
