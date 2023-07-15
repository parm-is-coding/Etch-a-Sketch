console.log("hello World");
const container = document.querySelector("#container");
let grid;

function getPadding(numSquares){
    let padding = 400/numSquares;
    
    return `${padding}px`
}

function createRow(num){
    const row = document.createElement("div");
    row.classList.add('row');
    
    for(let i = 0; i < num;i++){
        const column = document.createElement('div');
        column.classList.add('column');
        column.style.padding = getPadding(num); 
        column.addEventListener('mouseover',() =>{
            column.style.background = "black";

        })
        row.appendChild(column);
    }
    return row; 

}
function createGrid(num){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for(let i = 0; i < num; i++){
        grid.appendChild(createRow(num));
    }
    return grid;
}

function getInput(){
    
}
const button = document.querySelector("#squares");
button.addEventListener("click", () => {
   let input = 0;
    while(input > 100 || input <= 0){
         input = prompt("Enter num Square");
    }
    num = input;
    container.removeChild(child);
    child = createGrid(num);
    container.append(child);
    

})

//Default Grid
let num = 16;
let child =createGrid(num);
container.appendChild(child);


