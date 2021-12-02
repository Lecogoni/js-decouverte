
/*
left 37 ; top 38 ; right 39 ; bottom 40
*/

const cat = document.getElementById('cat')
const box = document.getElementById('box')

let rect = cat.getBoundingClientRect();
let catTop = rect.top;
let catLeft = rect.left;
let speed = 5;

/**
 * function execute on body resize, load, orientation change
 * get window dimension and use to center horizontaly and verticaly box
 */
function displayDimensions() {
  
  let height = window.innerHeight;
  // let tutu = document.body.offsetHeight
  let width = document.body.offsetWidth;
  // console.log('h' + height);
  // console.log('w' + width);
  box.style.cssText = `top:${height / 2 - 50}px;left:${width / 2 - 50}px;`;
};

 

// let key = document.addEventListener('keydown', (event) => {
//   moveDiv(event.key)
// });


function moveDiv(keynum){

  if (keynum === 'ArrowRight'){
    cat.style.cssText = `left:${catLeft += 5}px;top:${catTop}px;`;
  } else if (keynum === 'ArrowDown') {
    cat.style.cssText = `top:${catTop += 5}px;left:${catLeft}px;`;
  } else if (keynum === 'ArrowUp') {
    cat.style.cssText = `top:${catTop -= 5}px;left:${catLeft}px;`;
  } else if (keynum === 'ArrowLeft') {
    cat.style.cssText = `left:${catLeft -= 5}px;top:${catTop}px;`;
  }
  let catPos = cat.getBoundingClientRect();
  checkMatch(catPos)
}


// ICI PREND EN COMPTE LE DEPLACEMENT EN DIAGONALE

window.addEventListener("keyup", handleKeyPress);
window.addEventListener("keydown", handleKeyPress);

let keys = {}

function handleKeyPress(e) {
  if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
    if (e.type == 'keydown') {
      keys[e.keyCode] = true
    } else {
      keys[e.keyCode] = false
    }
  }
  moveTheDiv(keys)
}




function moveTheDiv(keys){
  console.log(keys[39]);

  if(keys[37] === true){catLeft -= speed};
  if(keys[38] === true){catTop -= speed};
  if(keys[39] === true){catLeft += speed};
  if(keys[40] === true){catTop += speed};

  cat.style.cssText = `left:${catLeft}px;top:${catTop}px;`

  let catPos = cat.getBoundingClientRect();
  checkMatch(catPos)
}


function checkMatch(catPos){
  let boxPos = box.getBoundingClientRect()
  if ((catPos.top >= boxPos.top - 10 && catPos.left >= boxPos.left - 10) && (catPos.top <= boxPos.top + 10 && catPos.left <= boxPos.left + 10)) {
    cat.classList.add("blue");
  } else {
    cat.classList.remove("blue");
  }
}

// https://stackoverflow.com/questions/7298507/move-element-with-keypress-multiple
// http://jsfiddle.net/fbFuW/220/