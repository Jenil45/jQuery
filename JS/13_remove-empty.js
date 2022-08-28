        $(document).ready(function(){
            $('#remove').click(function(){
                $('#l1').remove()
            })

            $('#empty').click(function(){
                $('#box h2').empty("<h2>This is prepend</h2>")
            })
        })
