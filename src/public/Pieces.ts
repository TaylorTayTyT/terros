abstract class Piece {
    _color: Number;
    _location: number[];
    constructor(color: Number, location: number[]) {
        this._color = color;  // Use a different name for the internal variable (e.g., _color)
        this._location = location;
    }
    // Getter for color
    get color() {
        return this._color;  // Return the internal variable
    }
    // Setter for color (optional)
    set color(newColor) {
        this._color = newColor;
    }

    get location() {
        return this._location
    };
    set location(location) {
        this._location = location
    }
    move(row: number, col: number) {
        this.location = [row, col]
    }

    abstract valid_move(desired_location: Int16Array, cb: chessBoard) : boolean;
}

class Pawn extends Piece{
    //1 means you are white, -1 is black
    public constructor(color: Number, location: number[]) {
        super(color, location); 
    }
    get color() {
        return this._color;
    };
    valid_move(desired_location: Int16Array, cb: chessBoard) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        const moveOnce = col == curr_c && curr_r + this._color.valueOf() == row
        return col == curr_c && curr_r + this._color.valueOf() == row
    };
};

class King extends Piece{
    constructor(color: number, location: number[]) {
        super(color, location)
    }
    get color() {
        return this._color;
    };
    valid_move(desired_location: Int16Array, cb: chessBoard) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return Math.abs(row - curr_r) == 1 && col - curr_c == 0 || Math.abs(col - curr_c) == 1 && row - curr_r == 0
    }
};

class Rook extends Piece {
    constructor(color: number, location: number[]) {
        super(color, location)
    }
    get color() {
        return this._color;
    };

    valid_move(desired_location: Int16Array, cb: chessBoard){
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        
        return row == curr_r && col != curr_c || row != curr_r && col == curr_c
    }
};

class Bishop extends Piece{
    constructor(color: number, location: number[]) {
        super(color, location)
    }
    get color() {
        return this._color;
    };
    valid_move(desired_location: Int16Array, cb: chessBoard){
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return Math.abs(curr_r - row) == Math.abs(curr_c - col)
    }
}

class Queen extends Piece{ 
    constructor(color: number, location: number[]) {
        super(color, location)
    }
    get color() {
        return this._color;
    };
    valid_move(desired_location: Int16Array, cb: chessBoard){
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return Math.abs(curr_r - row) == Math.abs(curr_c - col) || row == curr_r && col != curr_c || row != curr_r && col == curr_c;
    }
}

class Knight extends Piece{
    public constructor(color: number, location: number[]) {
        super(color, location)
    }
    public get color() {
        return this._color;
    };
    valid_move(desired_location: Int16Array, cb: chessBoard){
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._location;
        return Math.abs(curr_r - row) == 2 && Math.abs(curr_c - col) == 1 || Math.abs(curr_r - row) == 1 && Math.abs(curr_c - col) == 2;
    }
}


class chessBoard{
    private _move: number = 0; 
    private _board: number[][] | Piece[][]; 
    private _turn: number;
    constructor(){
        this._turn = 1; 
        this._board = Array.from({length: 8}, () => Array(8).fill(0))
        //this._board = new Array(8).fill().map(() => new Array(8).fill(0));
        for (let i: number = 0; i < this._board.length; i++){
            for (let j: number = 0; j < this._board.length; j++){
                if(i == 1) {
                    this._board[i][j] = new Pawn(1, [i,j]);
                }
                if(i == 6){
                    this._board[i][j] = new Pawn(-1, [i,j]);
                }
                if(i == 0){
                    if(j == 0 || j == 7){
                        this._board[i][j] = new Rook(1, [i, j]);
                    }
                    else if(j == 1 || j == 6){
                        this._board[i][j] = new Knight(1, [i, j]);
                    }
                    else if(j == 2 || j == 5){
                        this._board[i][j] = new Bishop(1, [i, j]);
                    }
                    else if(j == 3){
                        this._board[i][j] = new King(1, [i, j]);
                    }
                    else if(j == 4){
                        this._board[i][j] = new Queen(1, [i, j]);
                    }
                    else{
                        console.error("naurrr")
                    }
                }
                if(i == 7){
                    if (j == 0 || j == 7){
                        this._board[i][j] = new Rook(-1, [i, j]);
                    }
                    else if(j == 1 || j == 6){
                        this._board[i][j] = new Knight(-1, [i, j]);
                    }
                    else if(j == 2 || j == 5){
                        this._board[i][j] = new Bishop(-1, [i, j]);
                    }
                    else if(j == 3){
                        this._board[i][j] = new Queen(-1, [i, j]);
                    }
                    else if(j == 4){
                        this._board[i][j] = new King(-1, [i, j]);
                    }
                    else{
                        console.error("naurrr")
                    }
                }
            }
        }
    };

    piece_by_location(i: number, j:number){
        return this._board[i][j]
    };

    move(row_o: number, col_o: number, row_d: number, col_d: number) : boolean{
        const origin_piece: number | Piece = this.piece_by_location(row_o, col_o);

        //want to move a piece thats not a piece
        if (typeof(origin_piece) === "number") return false; 

        if(origin_piece._color != this._turn) return false; 

        //piece is verified to be a piece
        const int16Destination : Int16Array = new Int16Array([row_d, col_d])
        //check if that piece can hypothetically move to the desired location
        if(origin_piece.valid_move(int16Destination, this)){
            this._board[row_d][col_d] = origin_piece; 
            origin_piece.move(row_d, col_d);
            return true;
        }
        console.log(this._board)
        return false;
    }

    public get board(){
        return this._board;
    };
    public get turn(){
        return this._turn;
    }
    public switchTurn(){
        this._turn *= -1; 
    }
}

function assign(tile: HTMLElement, i: number, j: number){
    if(i == 1 || i == 6){
        tile.innerText = "p";
        if(i == 1){
            tile.style.color = "white"
        }
        else{
            tile.style.color = "black"
        }
    };
    //setup kings
    if (i == 0 && j == 3){
        tile.innerText = "k";
        tile.style.color = "white"
    };
    if (i == 7 && j == 4){
        tile.innerText = "k";
        tile.style.color = "black"
    }
    //setup queens
    if(i == 0 && j == 4){
        tile.innerText = "q";
        tile.style.color = "white"
    }
    if(i == 7 && j == 3){
        tile.innerText = "q";
        tile.style.color = "black"
    }

    //setup rooks
    if(i == 0 && j == 0){
        tile.innerText = "r";
        tile.style.color = "white"
    }
    if(i == 0 && j == 7){
        tile.innerText = "r";
        tile.style.color = "white"
    }
    if(i == 7 && j == 0){
        tile.innerText = "r";
        tile.style.color = "black"
    }
    if(i == 7 && j == 7){
        tile.innerText = "r";
        tile.style.color = "black"
    }

    //setup knights
    if(i == 0 && j == 1){
        tile.innerText = "h";
        tile.style.color = "white"
    }
    if(i == 0 && j == 6){
        tile.innerText = "h";
        tile.style.color = "white"
    };
    if(i == 7 && j == 1){
        tile.innerText = "h";
        tile.style.color = "black"
    }
    if(i == 7 && j == 6){
        tile.innerText = "h";
        tile.style.color = "black"
    }
    //setup bishops
    if(i == 0 && j == 2){
        tile.innerText = "b";
        tile.style.color = "white"
    }
    if(i == 0 && j == 5){
        tile.innerText = "b";
        tile.style.color = "white"
    }
    if(i == 7 && j == 2){
        tile.innerText = "b";
        tile.style.color = "black"
    }
    if(i == 7 && j == 5){
        tile.innerText = "b";
        tile.style.color = "black"
    }
}

module.exports = {Piece, Pawn, King, Rook, Bishop, Queen, Knight, chessBoard, assign}