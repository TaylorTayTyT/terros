var ChessPiece = require("./Pieces");
document.addEventListener("DOMContentLoaded", function () {
    var chessboard = document.getElementById("chessBoard");
    if (!chessboard)
        return;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var tile = document.createElement("div");
            tile.id = "(".concat(i, ", ").concat(j, ")");
            tile.classList.add("tile");
            chessboard.appendChild(tile);
            //set up pawns
            ChessPiece.assign(tile, i, j);
        }
    }
    ;
});
