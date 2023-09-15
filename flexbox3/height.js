function changeheight(){
document.getElementById("setDimensionsButton").addEventListener("click", function() {

    var widthValue = document.getElementById("widthInput").value;
    var heightValue = document.getElementById("heightInput").value;
    
    var resizeElement = document.getElementById("resizeElement");
    
    resizeElement.style.width = widthValue + "px";
    resizeElement.style.height = heightValue + "px";
  });
}