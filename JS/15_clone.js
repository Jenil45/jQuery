        $(document).ready(function(){
            $('#clone').click(function(){
                $('#box h2').clone().prependTo("#box1")
            })
            $('#clone').click(function(){
                $('#box p').clone().appendTo("#box1")
            })

        })
