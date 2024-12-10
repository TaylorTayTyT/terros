export class Pawn {
    constructor(piece) {
        this._piece = piece;
        this._moveset = [[0, piece._color * 1]]
    }
    get color() {
        return this._piece._color;
    };
    get moveset() {
        return this._moveset
    };
    set moveset(moveset) {
        this._moveset = moveset;
    }
    valid_move(desired_location) {
        const [row, col] = desired_location;
        const [move_r, move_c] = move;
        const [curr_r, curr_c] = this._piece._location;
        return move_r + curr_r == row && move_c + curr_c == col
    }
};

export class King {
    constructor(piece) {
        this._piece = piece
        this._moveset = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    }
    get color() {
        return this._piece._color;
    };
    get moveset() {
        return this._moveset
    };
    set moveset(moveset) {
        this._moveset = moveset;
    };
    valid_move(desired_location) {
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._piece._location;
        for (let move in this._moveset) {
            const [move_r, move_c] = move;
            
            if (move_r + curr_r == row && move_c + curr_c == col) {
                return true
            };
        }
        return false;
    }
};

export class Rook {
    constructor(piece) {
        this._piece = piece;
        this._moveset = [[0, null], [null, 0]]
    }
    get color() {
        return this._piece._color;
    };
    get moveset() {
        return this._moveset
    };
    set moveset(moveset) {
        this._moveset = moveset;
    };
    valid_move(desired_location){
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._piece._location;
        
        return row == curr_r && col != curr_c || row != curr_r && col == curr_c
    }
};

export class Bishop {
    constructor(piece) {
        this._piece = piece;
        
    }
    get color() {
        return this._piece._color;
    };
    get moveset() {
        return this._moveset
    };
    set moveset(moveset) {
        this._moveset = moveset;
    };
    valid_move(desired_location){
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._piece._location;
        return Math.abs(curr_r - row) == Math.abs(curr_c - col)
    }
}

export class Queen{
    constructor(piece) {
        this._piece = piece;
        
    }
    get color() {
        return this._piece._color;
    };
    get moveset() {
        return this._moveset
    };
    set moveset(moveset) {
        this._moveset = moveset;
    };
    valid_move(desired_location){
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._piece._location;
        return Math.abs(curr_r - row) == Math.abs(curr_c - col) || row == curr_r && col != curr_c || row != curr_r && col == curr_c;
    }
}

export class Knight{
    constructor(piece) {
        this._piece = piece;
        
    }
    get color() {
        return this._piece._color;
    };
    get moveset() {
        return this._moveset
    };
    set moveset(moveset) {
        this._moveset = moveset;
    };
    valid_move(desired_location){
        const [row, col] = desired_location;
        const [curr_r, curr_c] = this._piece._location;
        return Math.abs(curr_r - row) == 2 && Math.abs(curr_c - col) == 1 || Math.abs(curr_r - row) == 1 && Math.abs(curr_c - col) == 2;
    }
}
export class Piece {
    constructor(color, location) {
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
}

export class chessBoard{
    constructor(){
        this._board = new Array(8).fill().map(() => new Array(8).fill(0));
        for (let i = 0; i < this._board.length; i++){
            for (let j = 0; j < this._board.length; j++){ 
                if(i == 1) {
                    const piece = new Piece(1, [i,j])
                    this._board[i][j] = new Pawn(piece);
                }
                if(i == 6){
                    const piece = new Piece(-1, [i,j])
                    this._board[i][j] = new Pawn(piece);
                }
            }
        }
    };

    set board(board){
        this._board = board;
    };
    piece(i, j){
        return this._board[i][j]
    }
}