var height = 1;
var width = 1;
var color = "#000000";
// Select color input
document.getElementById("colorPicker").addEventListener("change",changecolor);
function changecolor(){
    color = document.getElementById("colorPicker").value;
}
// Select size input
document.getElementById("inputHeight").addEventListener("change",changeheight);
document.getElementById("inputWidth").addEventListener("change",changewidth);
function changeheight() {
    height = document.getElementById("inputHeight").value;
}

function changewidth(){
    width = document.getElementById("inputWidth").value;
}

function changebackgroundcolor(event){
    event.target.style.backgroundColor = color;
}
// When size is submitted by the user, call makeGrid()
var table = document.getElementById("pixelCanvas");
document.getElementById("sizePicker").addEventListener("submit",makeGrid);
function makeGrid(event) {
    event.preventDefault();
    for (var row = table.rows.length -1; row >= 0; row --){
        table.deleteRow(row);
    }
    
    for (var row = 0; row < height; row ++){
        var tablerow = table.insertRow(-1);
        for (var column = 0; column < width; column ++){
            var tablecell = tablerow.insertCell(-1);
            tablecell.addEventListener("click", changebackgroundcolor);
        }
    }
// Your code goes here!

}
