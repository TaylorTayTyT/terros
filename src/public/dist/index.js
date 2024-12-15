"use strict";
const ChessPiece = require("./Pieces");
let dragOrigin = null;
let dragEnd = null;
let currElem = null;
const cb = new chessBoard();
function render(row_o, col_o, row_d, col_d) {
    if (!cb.move(row_o, col_o, row_d, col_d))
        return false;
    const tileOrigin = document.getElementById(`${row_o},${col_o}`);
    let piece = "";
    if (tileOrigin) {
        piece = tileOrigin.innerText;
        tileOrigin.innerText = "";
    }
    ;
    const tileDestination = document.getElementById(`${row_d},${col_d}`);
    if (tileDestination)
        tileDestination.innerText = piece;
}
function initialize() {
    document.addEventListener("drop", (e) => {
        e.preventDefault();
        if (!(e && e.target && e.target.id))
            return false;
        const tile = document.getElementById(e.target.id);
        dragEnd = tile;
        if (!(dragEnd && dragOrigin))
            return;
        const [dragOriginRow, dragOriginCol] = dragOrigin.id.split(',').map((target) => parseInt(target));
        const [dragEndRow, dragEndCol] = dragOrigin.id.split(',').map((target) => parseInt(target));
        render(dragOriginRow, dragOriginCol, dragEndRow, dragEndCol);
    });
    document.addEventListener("dragenter", (e) => {
        e.preventDefault();
    });
    document.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    document.addEventListener("mousedown", (e) => {
        if (!(e && e.target && e.target.id))
            return false;
        const tile = document.getElementById(e.target.id);
        console.log(tile);
        if (tile) {
            dragOrigin = tile;
        }
        console.log(dragOrigin);
    });
    document.addEventListener("DOMContentLoaded", () => {
        const chessboard = document.getElementById("chessBoard");
        if (!chessboard)
            return;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const tile = document.createElement("div");
                tile.draggable = true;
                tile.id = `${i},${j}`;
                tile.classList.add("tile");
                chessboard.appendChild(tile);
                //set up pawns
                ChessPiece.assign(tile, i, j);
            }
        }
        ;
        document.querySelectorAll(".tile").forEach(element => {
            if (element.textContent) {
                element.classList.add("piece");
            }
        });
    });
}
;
initialize();
