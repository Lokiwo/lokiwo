function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 5;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 330) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"+1; 
      elem.style.left = pos + "px"; 
    }
  }
}