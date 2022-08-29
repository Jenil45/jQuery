        $(document).ready(function(){
            $('#replacew').click(function(){
                $('#box p:first').replaceWith("<h3>Replace with<h3>")
            })

            $('#replacea').click(function(){
                $('<h2>Replace All</h2>').replaceAll("#box p")
            })
        })
