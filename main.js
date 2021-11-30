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



  const tableContainer = document.getElementById('table-container');

  function createTable(rows, columns){
    // create table tad
    let newTable = document.createElement("table");
    // loop to create rows
    for (i = 0; i < rows; i++){
      let newRow = document.createElement("tr");
      // create columns
      for (j = 0; j < rows; j++){
        let newColumn = document.createElement("td");
        newColumn.style.cssText = 'width:60px;height:60px;-moz-border-radius:100px;border:1px  solid #ddd;-moz-box-shadow: 0px 0px 8px  #fff;';
        newColumn.innerHTML = `${i} / ${j}`;
        newRow.appendChild(newColumn);
      }
      newTable.appendChild(newRow);
    }
    tableContainer.appendChild(newTable);
  }

  createTable(5, 4)


 
  const degrade = document.getElementById('degrade');

  function createDegrade(rows, columns, firstColor, secondColor){

    let startR = (firstColor.r);
    let startG = (firstColor.g);
    let startB = (firstColor.b);
    
    let deltaR = (firstColor.r - secondColor.r) / (rows * columns - 1)
    let deltaG = (firstColor.g - secondColor.g) / (rows * columns - 1)
    let deltaB = (firstColor.b - secondColor.b) / (rows * columns - 1)

    let newTable = document.createElement("table");
    for (i = 0; i < rows; i++){
      let newRow = document.createElement("tr");
      for (j = 0; j < columns; j++){
        let newColumn = document.createElement("td");
        // if first cell assign firstColor value
        if (i === 0 && j === 0){
          newColumn .style.cssText = `width:150px;height:80px;color: #ddd;border:1px  solid #ddd;background-color: rgb(${firstColor.r}, ${firstColor.g}, ${firstColor.b});`;
          newColumn.innerHTML = firstColor.r +", " + firstColor.g + ", " + firstColor.b;
          // if last cell assign lastColor value
        } else if (i === rows - 1 && j === columns - 1){
          newColumn .style.cssText = `width:150px;height:80px;color: #ddd;border:1px  solid #ddd;background-color: rgb(${secondColor.r}, ${secondColor.g}, ${secondColor.b});`;
          newColumn.innerHTML = secondColor.r +", " + secondColor.g + ", " + secondColor.b;
        } else {
          newColumn .style.cssText = `width:150px;height:80px;color: #ddd;border:1px  solid #ddd;background-color: rgb(${firstColor.r -= deltaR }, ${firstColor.g -= deltaG}, ${firstColor.b -= deltaB});`;
          newColumn.innerHTML = (startR -= deltaR) +", " + (startG -= deltaG) + ", " + (startB -= deltaB);
        }
        newRow.appendChild(newColumn);
      }
      newTable.appendChild(newRow);
    }
    degrade.appendChild(newTable);
  }
  
  const red = {
    r: 255, 
    g: 0,
    b: 0
  }

  const blue = {
    r: 0, 
    g: 0,
    b: 255
  }

  createDegrade(5, 4, red, blue)

}
