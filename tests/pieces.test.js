const { Piece, Pawn, King, Rook, Bishop, Queen, Knight, chessBoard, assign } = require("../src/public/Pieces");

const pawn = new Pawn(1, [1, 0]);
test("white pawn is functional", () => {
    expect(pawn.valid_move([2, 0]));
    expect(!pawn.valid_move([3, 0]));
    expect(pawn._color == 1);
    expect(pawn._location == [1, 0]);
})

const pawnB = new Pawn(1, [6, 0]);
test("black pawn is functional", () => {
    expect(pawnB.valid_move([5, 0]));
    expect(!pawn.valid_move([4, 0]));
    expect(pawn._color == 1);
    expect(pawn._location == [6, 0]);
});

