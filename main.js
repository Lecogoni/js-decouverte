window.onload = function() {


  const portItems = document.getElementsByClassName('portfolio_item');
  // const portImg = document.getElementById('portImg');
  const portInfo = document.getElementById('portInfo');


  console.log(portItems);

  // portItem.addEventListener("mouseenter", showCard);
  // portItem.addEventListener("mouseleave", hideCard);

  function showCard(){
    portInfo.style.top = 0+'px';
    portInfo.style.background = `red`;
  }

  function hideCard(){
    portInfo.style.top = 80+'px';
    portInfo.style.background = `blueviolet`;
  }

}