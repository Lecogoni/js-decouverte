window.onload = function() {

  const consonnes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
  const voyelles = ["a", "e", "i", "o", "u", "y"];

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let times = 6;

  function sentence(times){
    let numbOfWords = randomInteger(1, times)
    let sentence = '';
    for(var i = 0; i < numbOfWords; i++){
      sentence += word(times) + " ";
    }
    console.log(sentence);
    return sentence;
  }

  function word(times){
    numOfPhenome = randomInteger(1, times)
    let word = '';
    for(var i = 0; i < numOfPhenome; i++){
      word += phoneme();
    }
    return word;
  }

 
  function phoneme(){

    let num = Math.random()
    let phoneme = '';

    if (num <= 0.5){
      phoneme += voyelles[randomInteger(0, (voyelles.length - 1))];
      phoneme += consonnes[randomInteger(0, (consonnes.length - 1))];
    } else {
      phoneme += consonnes[randomInteger(0, (consonnes.length - 1))];
      phoneme += voyelles[randomInteger(0, (voyelles.length - 1))];
    }
    return phoneme;
  }

  sentence(times)

 }