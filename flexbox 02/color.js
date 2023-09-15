document.getElementById("changeColorButton").addEventListener("click", function() {
  
  var selectedColor = document.getElementById("colorPicker").value;
  
  document.body.style.backgroundColor = selectedColor;
});
