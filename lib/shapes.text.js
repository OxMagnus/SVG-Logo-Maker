const {Circle, Square, Triangle} = require("./shapes")

//Circle Shape
describe("Circle", () => {
    test("renders properly",() => {
        const shape = new Circle();
        var color = ("Yellow")
        shape.setColor(color)
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100% fill="${this.color}"/>`);
    });
});

//Square Shape
describe("Square", () => {
    test("renders properly", () => {
        const shape = new Square();
        var color = ("Purple")
        shape.setColor(color)
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}"/>`);
    });
});

//Triangle Shape
describe("Triangle", () => {
    test("renders properly", () => {
        const shape = new Triangle();
        var color = ("Pink")
        shape.setColor(color)
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`);
    });
});