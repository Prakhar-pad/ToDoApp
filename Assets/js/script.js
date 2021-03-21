//for mobile view
function myFunction(x) {
      if (x.matches) { // If media query matches
            $( init );

            function init() { 
              $('#todo-container').unwrap();
            }

    } 
}
    
    var x = window.matchMedia("(max-width: 500px)");

    myFunction(x) // Call listener function at run time

    function deleteCheckBox() {
      var ul = document.getElementById('collection-list');
      var li = ul.children;
      for (var i=0; i < li.length; i++) {
          if (li[i] && li[i].children[0].children[0].children[0].children[0].checked) {
              li[i].children[0].children[2].style.pointerEvents="all"

          }
          else{
            li[i].children[0].children[2].style.pointerEvents="none"

          }
      }
  }