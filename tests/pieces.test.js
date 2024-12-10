
class Piece {
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
// function sum(a: number, b: number): number {
//   return a + b;
// }
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const p = new Piece(1, [0,0]); 
test("piece is functional", ()=>{
  expect(p._color == 1)
  expect(p._location == [0,0])
})