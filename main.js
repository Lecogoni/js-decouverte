

const cat = document.getElementById('cat')
const box = document.getElementById('box')

let rect = cat.getBoundingClientRect();
let catTop = rect.top;
let catLeft = rect.left;

/**
 * function execute on body resize, load, orientation change
 * get window dimension and use to center horizontaly and verticaly box
 */
function displayDimensions() {
  
  let height = window.innerHeight;
  // document.body.offsetHeight
  let width = document.body.offsetWidth;
  // console.log('h' + height);
  // console.log('w' + width);
  box.style.cssText = `top:${height / 2 - 50}px;left:${width / 2 - 50}px;`;
};

 

let key = document.addEventListener('keydown', (event) => {
  moveDiv(event.key)
});


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