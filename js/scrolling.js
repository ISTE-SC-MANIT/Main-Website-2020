var navbar = document.getElementById("bar");
          
     window.onscroll = function() {scrollFunction()};
     
     function scrollFunction() {
       if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
           navbar.classList.add("hhd");
        
       } else {
        if(navbar.classList.contains("hhd"))
        navbar.classList.remove("hhd");
       }
    }