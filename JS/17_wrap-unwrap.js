        $(document).ready(function(){
            $('#append').click(function(){
                $('#ol').wrap("<div id='test'></div>")
            })

            $('#prepend').click(function(){
                $('#ol').unwrap()
            })

            $('#append1').click(function(){
                $('li').wrapAll("<div id='test1'></div>")
            })

            $('#prepend2').click(function(){
                $('h1').wrapInner("<span class='orange'></span>")
            })
        })
