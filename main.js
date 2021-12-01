
const inputName = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
let userInput;

inputName.addEventListener("input", (e) => {
  userInput = e.target.value;
});

let morseCode = {
  a:"CL",b:"LCCC",c:"LCLC",d:"LCC",e:"C",f:"CCLC",g:"LLC",h:"CCCC",i:"CC",j:"CLLL",k:"LCLC",l:"CLCC",m:"LL",n:"LC",
  o:"LLL",p:"CLLC",q:"LLCL",r:"CLC",s:"CCC",t: "L",u:"CCL",v:"CCCL",w:"CLL",x:"LCCL",y:"LCLL",z:"LLCC",
  1:"CLLLL",2:"CCLLL",3:"CCCLL",4:"CCCCL",5:"CCCCC",6:"LCCCC",7:"LLCCC",8:"LLLCC",9:"LLLLC",0:"LLLLL"
}


let alphabet = [["A",".-"],["B","-..."],["C","-.-."],["D","-.."],["E","."],["F","..-."],["G","--."],["H","...."],["I",".."],["J",".---"],
        ["K","-.-"],["L",".-.."],["M","--"],["N","-."],["O","---"],["P",".--."],["Q","--.-"],["R",".-."],["S","..."],["T","-"],["U","..-"],
        ["V","...-"],["W",".--"],["X","-..-"],["Y","-.--"],["Z","--.."],["1",".----"],["2","..---"],["3","...--"],["4","....-"],["5","....."],
        ["6","-...."],["7","--..."],["8","---.."],["9","----."],["0","-----"],[".",".-.-.-"],[",","--..--"],["?","..--.."],["'",".----."],["!","-.-.--"],
        ["/","-..-."],[":","---..."],[";","-.-.-."],["=","-...-"],["-","-....-"],["_","..--.-"],["\"",".-..-."],["@",".--.-."],["(","-.--.-"],[" ",""]];



form.addEventListener("submit", (e) => {
  e.preventDefault();
  switchLetterToMorseValue(userInput);
})

function switchLetterToMorseValue(input){

  for(i = 0; i < input.length; i++){
    

    console.log(morseCode[input[i]]);
    
  }

}
 
// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// const oscillator = audioCtx.createOscillator();
// oscillator.type = 'square';
// oscillator.frequency.setValueAtTime(3000, audioCtx.currentTime); // value in hertz
// oscillator.connect(audioCtx.destination);
// oscillator.start();

const DOT = 1;
const DASH = 3;
const NEXT = DOT;
const SPACE = 7;
const SPEED = 1.2 / 15;

const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();

const oscillator = ctx.createOscillator();
const gainNode = ctx.createGain();

oscillator.type = "sine";
// oscillator.frequency.value = 600;
oscillator.connect(gainNode);
gainNode.connect(ctx.destination);
oscillator.frequency.setValueAtTime(600, ctx.currentTime)
oscillator.start();

// gainNode.gain.value = 0;


function playCodeStream(stream) {
  let t = ctx.currentTime;
  gainNode.gain.setValueAtTime(0, t);
  for (var i = 0; i < stream.length; i++) {
    switch(stream.charAt(i)) {
      case ".":
        gainNode.gain.setValueAtTime(1, t);
        t += DOT * SPEED;
        gainNode.gain.setValueAtTime(0, t);
        t += NEXT * SPEED;
        break;
      case "-":
        gainNode.gain.setValueAtTime(1, t);
        t += DASH * SPEED;
        gainNode.gain.setValueAtTime(0, t);
        t += NEXT * SPEED;
        break;
      case " ":
        t += SPACE * SPEED;
        break;
    }  
  }
}