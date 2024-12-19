const ChessPiece = require("./Pieces");

let dragOrigin: HTMLElement | null = null;
let dragEnd: HTMLElement | null = null;
let currElem: HTMLElement | null = null;
const cb = new ChessPiece.chessBoard(); 

function render(row_o: number, col_o: number, row_d: number, col_d: number){
    //check if the chessboard allows the piece to move
    if(!cb.move(row_o, col_o, row_d, col_d)) return false; 
    
    const tileOrigin : HTMLElement | null = document.getElementById(`${row_o},${col_o}`); 
    let piece = ""; 

    if(tileOrigin) {
        piece = tileOrigin.innerText;
        tileOrigin.innerText = ""; 
    };

    const tileDestination : HTMLElement | null = document.getElementById(`${row_d},${col_d}`);
    if(tileDestination) {
        tileDestination.innerText = piece; 
        const color= cb._board[row_d][col_d]._color;
        switch (color) {
            case 1:
                tileDestination.style.color = "white"
                break; 
            case -1:
                tileDestination.style.color = "black"
                break;
            default:
                console.error("no color")
        };
        cb.switchTurn(); 
        cb._move += 1; 
    }
}

function initialize() {
    document.addEventListener("drop", (e: any) => {
        e.preventDefault();
        if (!(e && e.target && e.target.id)) return false;
        const tile: HTMLElement | null = document.getElementById(e.target.id);
        dragEnd = tile;
        if(!(dragEnd && dragOrigin)) return; 
        const [dragOriginRow, dragOriginCol] = dragOrigin.id.split(',').map((target: string) => parseInt(target));
        const [dragEndRow, dragEndCol] = dragEnd.id.split(',').map((target: string) => parseInt(target));

        console.log(dragOrigin, dragEnd)
        render(dragOriginRow, dragOriginCol, dragEndRow, dragEndCol)
    });

    document.addEventListener("dragenter", (e: DragEvent) => {
        e.preventDefault();
    });
    document.addEventListener("dragover", (e: DragEvent) => {
        e.preventDefault();
    })

    document.addEventListener("mousedown", (e: any) => {

        if (!(e && e.target && e.target.id)) return false;
        const tile: HTMLElement | null = document.getElementById(e.target.id);
        if (tile) {
            dragOrigin = tile;
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
        const chessboard: HTMLElement | null = document.getElementById("chessBoard");
        if (!chessboard) return;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const tile = document.createElement("div")
                tile.draggable = true;
                tile.id = `${i},${j}`
                tile.classList.add("tile");
                chessboard.appendChild(tile)
                //set up pawns
                ChessPiece.assign(tile, i, j)
            }
        };

        document.querySelectorAll(".tile").forEach(element => {
            if (element.textContent) {
                element.classList.add("piece");
            }
        })
    })
};

initialize(); 
