"use strict";
const ChessPiece = require("./Pieces");
let dragOrigin = null;
let dragEnd = null;
let currElem = null;
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
document.addEventListener("dragend", (e) => {
    console.log(e);
    if (!(e && e.target && e.target.id))
        return false;
    const tile = document.getElementById(e.target.id);
    if (tile) {
        dragEnd = currElem;
    }
    ;
    console.log(dragOrigin, dragEnd);
});
document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById("chessBoard");
    if (!chessboard)
        return;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const tile = document.createElement("div");
            tile.draggable = true;
            tile.addEventListener("mouseenter", (e) => {
                if (!(e && e.target && e.target.id))
                    return;
                dragEnd = document.getElementById(e.target.id);
                console.log(dragEnd);
            });
            tile.id = `(${i}, ${j})`;
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
