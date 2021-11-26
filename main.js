window.onload = function() {


  const portItems = document.querySelectorAll('.card');

  portItems.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      let portInfo = item.querySelector('.portfolio__info');
      portInfo.style.top = 0+'px';
    });
    item.addEventListener("mouseleave", (e) => {
      let cardInfo = item.querySelector('.portfolio__info');
      cardInfo.style.top = 80+'px';
    });
  });


}