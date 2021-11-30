window.onload = function(){

  const main = document.getElementById('main');
  
  let menuItems = [
    {
      url: "http://www.apple.com",
      text: "apple website"
    },
    {
      url: "http://www.google.com",
      text: "google website"
    },
    {
      url: "https://www.worldpadeltour.com",
      text: "wpt website"
    },
  ]

  function createMenu(menuItems, parent){
    let newUl = document.createElement("ul");
    main.appendChild(newUl);
    for(i = 0; i < menuItems.length; i++){
      let newLi = document.createElement("li");
      newLi.innerHTML = `<a href="${menuItems[i].url}">${menuItems[i].text}</a>`;
      newUl.appendChild(newLi);
    } 
  }

  createMenu(menuItems, main)
}


