console.log("hello World");
const container = document.querySelector("#container");
let grid;
function createRow(num){
    const row = document.createElement("div");
    row.classList.add('row');
    
    for(let i = 0; i < num;i++){
        const column = document.createElement('div');
        column.classList.add('column');
        column.textContent = "1"; 
        row.appendChild(column);
    }
    container.appendChild(row); 

}
function createGrid(num){
    for(let i = 0; i < num; i++){
        createRow(num);
    }
    
   
}
let num = 16;
createGrid(num);


