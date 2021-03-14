var checkedValue = null; 
var inputElements = document.getElementsByName('checkbox-id');
console.log('script file added')
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
		   console.log('checkedValue= ',checkedValue)
           break;
      }
	console.log(inputElements[i].checked)
	console.log(inputElements[i].value)
}