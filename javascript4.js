function removeElement(a) {
// Removes an element from the document.
var element= document.getElementById(a);
element.parentNode.removeChild(element);
return false;
 }

 function incrementElement(b) {
    // Removes an element from the document.
    var num= document.getElementById(b);
    num.value ++;  
     }

     function decrementElement(b) {
        // Removes an element from the document.
        var num= document.getElementById(b);
        if (num.value>0){
            num.value --;
        } 
         }