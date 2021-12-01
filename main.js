

  
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

 

document.addEventListener('keydown', (event) => {
  let keynum = event.key;
  
  if (keynum === 'ArrowRight'){

    cat.style.cssText = `left:${catLeft += 2}px;top:${catTop}px;`;
   
  } else if (keynum === 'ArrowDown') {

    cat.style.cssText = `top:${catTop += 2}px;left:${catLeft}px;`;
  } else if (keynum === 'ArrowUp') {
   
    cat.style.cssText = `top:${catTop -= 2}px;left:${catLeft}px;`;
  } else if (keynum === 'ArrowLeft') {
   
    cat.style.cssText = `left:${catLeft -= 2}px;top:${catTop}px;`;
  }
});

