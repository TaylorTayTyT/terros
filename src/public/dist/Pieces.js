"use strict";
class Piece {
    constructor(color, location) {
        this._color = color; // Use a different name for the internal variable (e.g., _color)
        this._location = location;
    }
    // Getter for color
    get color() {
        return this._color; // Return the internal variable
    }
    // Setter for color (optional)
    set color(newColor) {
        this._color = newColor;
    }
    get location() {
        return this._location;
    }
    ;
    set location(location) {
        this._location = location;
    }
}
class Pawn extends Piece {
    constructor(color, location) {
        super(color, location);
    }
    get color() {
        return this._color;
    }
    ;
    valid_move(desired_location) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return col == curr_c && curr_c + this._color.valueOf() == col;
    }
}
;
class King extends Piece {
    constructor(color, location) {
        super(color, location);
    }
    get color() {
        return this._color;
    }
    ;
    valid_move(desired_location) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return Math.abs(row - curr_r) == 1 && col - curr_c == 0 || Math.abs(col - curr_c) == 1 && row - curr_r == 0;
    }
}
;
class Rook extends Piece {
    constructor(color, location) {
        super(color, location);
    }
    get color() {
        return this._color;
    }
    ;
    valid_move(desired_location) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return row == curr_r && col != curr_c || row != curr_r && col == curr_c;
    }
}
;
class Bishop extends Piece {
    constructor(color, location) {
        super(color, location);
    }
    get color() {
        return this._color;
    }
    ;
    valid_move(desired_location) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return Math.abs(curr_r - row) == Math.abs(curr_c - col);
    }
}
class Queen extends Piece {
    constructor(color, location) {
        super(color, location);
    }
    get color() {
        return this._color;
    }
    ;
    valid_move(desired_location) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return Math.abs(curr_r - row) == Math.abs(curr_c - col) || row == curr_r && col != curr_c || row != curr_r && col == curr_c;
    }
}
class Knight extends Piece {
    constructor(color, location) {
        super(color, location);
    }
    get color() {
        return this._color;
    }
    ;
    valid_move(desired_location) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return Math.abs(curr_r - row) == 2 && Math.abs(curr_c - col) == 1 || Math.abs(curr_r - row) == 1 && Math.abs(curr_c - col) == 2;
    }
}
class chessBoard {
    constructor() {
        this._board = Array.from({ length: 8 }, () => Array(8).fill(0));
        //this._board = new Array(8).fill().map(() => new Array(8).fill(0));
        for (let i = 0; i < this._board.length; i++) {
            for (let j = 0; j < this._board.length; j++) {
                if (i == 1) {
                    this._board[i][j] = new Pawn(1, [i, j]);
                }
                if (i == 6) {
                    this._board[i][j] = new Pawn(-1, [i, j]);
                }
            }
        }
    }
    ;
    piece(i, j) {
        return this._board[i][j];
    }
}
function assign(tile, i, j) {
    if (i == 1 || i == 6) {
        tile.innerText = "p";
        if (i == 1) {
            tile.style.color = "white";
        }
        else {
            tile.style.color = "black";
        }
    }
    ;
    //setup kings
    if (i == 0 && j == 3) {
        tile.innerText = "k";
        tile.style.color = "white";
    }
    ;
    if (i == 7 && j == 4) {
        tile.innerText = "k";
        tile.style.color = "black";
    }
    //setup queens
    if (i == 0 && j == 4) {
        tile.innerText = "q";
        tile.style.color = "white";
    }
    if (i == 7 && j == 3) {
        tile.innerText = "q";
        tile.style.color = "black";
    }
    //setup rooks
    if (i == 0 && j == 0) {
        tile.innerText = "r";
        tile.style.color = "white";
    }
    if (i == 0 && j == 7) {
        tile.innerText = "r";
        tile.style.color = "white";
    }
    if (i == 7 && j == 0) {
        tile.innerText = "r";
        tile.style.color = "black";
    }
    if (i == 7 && j == 7) {
        tile.innerText = "r";
        tile.style.color = "black";
    }
    //setup knights
    if (i == 0 && j == 1) {
        tile.innerText = "h";
        tile.style.color = "white";
    }
    if (i == 0 && j == 6) {
        tile.innerText = "h";
        tile.style.color = "white";
    }
    ;
    if (i == 7 && j == 1) {
        tile.innerText = "h";
        tile.style.color = "black";
    }
    if (i == 7 && j == 6) {
        tile.innerText = "h";
        tile.style.color = "black";
    }
    //setup bishops
    if (i == 0 && j == 2) {
        tile.innerText = "b";
        tile.style.color = "white";
    }
    if (i == 0 && j == 5) {
        tile.innerText = "b";
        tile.style.color = "white";
    }
    if (i == 7 && j == 2) {
        tile.innerText = "b";
        tile.style.color = "black";
    }
    if (i == 7 && j == 5) {
        tile.innerText = "b";
        tile.style.color = "black";
    }
}
module.exports = { Piece, Pawn, King, Rook, Bishop, Queen, Knight, chessBoard, assign };
