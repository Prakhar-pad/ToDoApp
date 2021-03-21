function myFunction(x) {
      if (x.matches) { // If media query matches
            $( init );

            function init() { 
            
                //   var content=$('#todo-container').html();
              // Remove the #todo-container element but leave its contents
            //   $('#todo-container').replaceWith('<div id="todo-container-mob">'+ content + '</div>')
              $('#todo-container').unwrap();
            }

    } 
}
    
    var x = window.matchMedia("(max-width: 500px)");

    myFunction(x) // Call listener function at run time

    // Activate and Deactivate delete button through checkbox

    // function toggleLink(checkBox)
    // {
    //     var link = document.getElementsByName("delete-button");
    //     console.log(link);
    //     if (checkBox.checked)
    //         link.style.pointerEvents = "all";
    //     else
    //         link.style.pointerEvents = "none";
    // }

  //   function deleteCheckBox() {
  //     var ul = document.getElementById('collection-list');
  //     var li = ul.children;
  //     for (var i=0; i < li.length; i++) {
  //         if (li[i] && li[i].children[0].children[0].children[0].children[0].checked) {
  //             li[i].children[0].children[2].style.pointerEvents="all"

  //         }
  //     }
  // }