const ChessPiece = require("./Pieces");

let dragOrigin: HTMLElement | null = null; 
let dragEnd: HTMLElement | null = null; 
let currElem: HTMLElement | null = null; 

document.addEventListener("mousedown", (e: any) =>{
    
    if(!(e && e.target && e.target.id)) return false; 
    const tile : HTMLElement | null = document.getElementById(e.target.id);
    console.log(tile)
    if(tile){
        dragOrigin = tile; 
    }
    console.log(dragOrigin)
});
document.addEventListener("dragend", (e: any)=>{
    console.log(e)
    if(!(e && e.target && e.target.id)) return false; 
    const tile : HTMLElement | null = document.getElementById(e.target.id);
    if(tile){
        dragEnd = currElem; 
    };
    console.log(dragOrigin, dragEnd)
});


document.addEventListener("DOMContentLoaded", ()=>{
    const chessboard: HTMLElement | null = document.getElementById("chessBoard");
    if(!chessboard) return; 
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            const tile = document.createElement("div")
            tile.draggable = true; 
            tile.id = `(${i}, ${j})`
            tile.classList.add("tile");
            chessboard.appendChild(tile)
            //set up pawns
            ChessPiece.assign(tile, i, j)
        }
    };

    document.querySelectorAll(".tile").forEach(element => {
        if(element.textContent) {
            element.classList.add("piece");
        }
    })
})
