setInterval(brake, 1);
document.body.style.backgroundColor = "black";
function createDiv() {
  var div = document.createElement("div");

  div.className = "divStyle";
  div.style.backgroundColor = genCOL();
  console.log(123);
  document.getElementById("divSpace").appendChild(div);
}

function brake(){
    createDiv() 
}

// generate random hex color
function genCOL() {
  var color = "#";
  var letters = "0123456789ABCDEF";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function createRow() {
//   var row = document.createElement("div");

//   row.setAttribute("id", "row")  ;
//   row.className = "line";

//   console.log("row created");
//   document.getElementById("main").appendChild(row);

  
// }

// function createCols(){
//     var col = document.createElement("div");

//     col.className = "col";
//     col.className = "dot";
  
//     console.log("col created");
//     document.getElementById("row").appendChild(col);
// }

// function magic(){
//     rows = 4;
//     cols = 4;
     
//         createRow()

//         for(i = 0; i < 4; i++){
//             createCols()
//         }
  
// }

// setInterval(magic, 1000)