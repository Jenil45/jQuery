$(document).ready(function(){
            $(document).mousemove(function(event){
                $('#result').text("X : " +event.pageX)
                $('#result').append("Y : " +event.pageY)

                $('#box').on("click dblclick mouseover mouseout" , function(event)
                {
                    $('h2').html("Event : " + event.type)
                })

                $('#box').on("click dblclick mouseover mouseout" , function(event)
                {
                    $('h2').html("Event : " + event.which)
                })
                $('#inputbox').on("keydown" , function(event)
                {
                    $('h2').html("Event : " + event.which)
                })

                $('#box').on("click" , function(){
                    $('h2').html("Target Element : " + event.target)
                    $('h3').html("Target Element : " + event.target.nodeName)
                    $('h4').html("Target Element : " + event.target.innerHTML)
                })

                $('#prevent').click(function(event){
                    event.preventDefault();
                    var a = event.isDefaultPrevented();
                    $('h2').html(a);
                })

                $('#box').click(function(){
                    event.stopPropagation();
                    alert("This is div")
                });
                $('h1').click(function(){
                    event.stopPropagation();

                    alert("This is h1")
                });
                $('p').click(function(){
                    event.stopPropagation();

                    alert("This is p")
                });
                $('button').click(function(){
                    event.stopPropagation();

                    alert("This is button")
                });

                
            })
        })
