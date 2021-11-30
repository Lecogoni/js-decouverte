
let originalString= 'dkzdojc ojofze joij jiojfzefjejfezknkfoiejf efioejfe';
let counting = 0

function typingText(){

  console.log('in the fincution');

  let scriptingZone = document.getElementById('text-scripting');
  console.log(scriptingZone);

  if (counting < originalString.length ) {
    courant = scriptingZone.innerHTML.substring(0, scriptingZone.innerHTML.length - 1);
    courant += originalString.charAt(counting)+'_';
    console.log(courant);
    scriptingZone.innerHTML = courant
  } else {
    scriptingZone.innerHTML = ""
    counting = -1 // remise a - 1 pour que au tour suivant il passe a zero
  }

  counting ++;
  setTimeout("typingText()", 100);

}

window.onload = function() { typingText();}