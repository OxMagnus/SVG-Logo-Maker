const {Circle, Square, Triangle} = require("./shapes");

// Circle Shape
describe("Circle", () => {
    test("renders properly", () => {
        const shape = new Circle();
        const color = "Yellow";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
});

// Square Shape
describe("Square", () => {
    test("renders properly", () => {
        const shape = new Square();
        const color = "Purple";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
});

// Triangle Shape
describe("Triangle", () => {
    test("renders properly", () => {
        const shape = new Triangle();
        const color = "Pink";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
    });
});
