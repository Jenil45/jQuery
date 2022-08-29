        $(document).ready(function(){
            $('#append').click(function(){
                $("<li>List $</li>").appendTo('#ol')
            })

            $('#prepend').click(function(){
                $("<h2>This is prepend</h2>").prependTo('#box')
            })
        })
