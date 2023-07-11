console.log("hello World");
const container = document.querySelector("#container");
let grid;
function createRow(){
    const row = document.createElement("div");
    row.classList.add('row');
    row.textContent = "0";
    for(i = 0; i < 16;i++){
        const column = document.createElement('div');
        column.classList.add('column');
        column.textContent = "1"; 
        row.appendChild(column);
    }
    container.appendChild(row); 

}
createRow();

function createGrid(num){
    
    
   
}

