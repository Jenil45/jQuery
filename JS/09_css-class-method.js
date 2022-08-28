        $(document).ready(function(){

            $('#addbutton').click(function(){
                $('#box').addClass("first");
            })
  
            $('#removebutton').click(function(){
                $('#box').removeClass("first");
            })

            $('#togglebutton').click(function(){
                $('#box').toggleClass("second");
            })
        })
