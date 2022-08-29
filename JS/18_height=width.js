        $(document).ready(function(){
            $('#append').click(function(){
                console.log("Width : "+ $('#box').width())
                console.log("Inner Width : "+ $('#box').innerWidth())
                console.log("Outer Width : "+ $('#box').outerWidth())
                console.log("Outer Width(True) : "+ $('#box').outerWidth(true))
            })

            $('#prepend').click(function(){
                console.log("height : "+ $('#box').height())
                console.log("Inner height : "+ $('#box').innerHeight())
                console.log("Outer height : "+ $('#box').outerHeight())
                console.log("Outer height(True) : "+ $('#box').outerHeight(true))
            })


        })
