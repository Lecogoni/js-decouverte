// alert('hello world')

window.onload = function(){



  let myDiv = document.getElementById('my-div')
  // console.log(myDiv);

  /**
   * returns a random number between 0 and argument max
   * @param {*} max 
   * @returns an integer
   */
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


/* ON CLICK TOGGLE COLOR AND MOVE */

// myDiv.addEventListener("click", () => { 

//   myDiv.style = `position: absolute; 
//   top:${getRandomInt(window.innerWidth - myDiv.offsetWidth)}px; 
//   left:${getRandomInt(window.innerHeight - myDiv.offsetHeight)}px;`
//   myDiv.classList.toggle("bg-red");
// }); 

/* MOVE THE DIV ON MOUSE OVER */

// myDiv.addEventListener("mouseover", () => { 
//   myDiv.style = `position: absolute; 
//   top:${getRandomInt(window.innerWidth)}px; 
//   left:${getRandomInt(window.innerHeight)}px;`
// }); 



/* DRAG AND DROP */


  let mouseIsHold = false;
  let diffX;
  let diffY;

  myDiv.addEventListener("mousedown", function(e){ 
    
    if(mouseIsHold === false){
      mouseIsHold = true;
    };

    diffX = e.pageX - myDiv.offsetLeft;
    diffY = e.pageY - myDiv.offsetTop;

  });


  document.addEventListener("mousemove", function(e){

    if(mouseIsHold === true){

      myDiv.style.left = e.pageX - diffX + 'px';
      myDiv.style.top = e.pageY - diffY + 'px';
    }
  })


  document.addEventListener("mouseup", () => {
    if(mouseIsHold === true){
      mouseIsHold = false;
    };
  });

}