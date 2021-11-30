window.onload = function() {

 
  let values  = []
  let nbValues = 12;
  let heigth = 400;
  
  for (i = 0; i < nbValues; i++) {
    values[i] = Math.floor(Math.random() * 20)
  }
  
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  
  console.log(values);

  let offsetx = 10;
  let offsety = 10;
  ctx.moveTo(10, 10);

  for( i=0 ; i < nbValues; i++ ) {
    let width = values[i];
    ctx.fillRect(offsetx, offsety, width, heigth)
    offsetx += 20;
  }

 }
