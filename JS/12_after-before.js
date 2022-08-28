$(document).ready(function(){
            $('#After').click(function(){
                $('#ol').after("<li>List $</li>")
            })

            $('#Before').click(function(){
                $('#box').before("<h2>This is prepend</h2>")
            })
        })
