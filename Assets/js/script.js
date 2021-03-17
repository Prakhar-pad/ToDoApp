function myFunction(x) {
      if (x.matches) { // If media query matches
            $( init );

            function init() { 
            
                  var content=$('#todo-container').html();
              // Remove the #todo-container element but leave its contents
              $('#todo-container').replaceWith('<div id="todo-container-mob">'+ content + '</div>')
            //   $('#todo-container').unwrap();
            }

    } 
}
    
    var x = window.matchMedia("(max-width: 500px)");

    myFunction(x) // Call listener function at run time

