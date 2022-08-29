$(document).ready(function(){
            $('#Hide').click(function(){
                $('#box p').hide(100)
                $('#box').append("<div id='box1'><h2>Testing append on hide</h2></div>").show(10000)
            })

            $('#Show').click(function(){
                $('#box p').show("slow")
            })

            $('#toggle').click(function(){
                $('#ol').toggle("slow")
            })

            $('#dark').click(function(){
                $('body').toggleClass('mode')
            })

        })
