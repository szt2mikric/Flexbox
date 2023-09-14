let colorpicker = document.getElementById('colorpicker');



  setInterval(()=>{
      let color = colorpicker.value;
      document.body.style.backgroundColor = color;
  }, 200);

  function changecolor(el) {
    document.body.style.backgroundColor = el.value;
  }
