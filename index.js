const fs = require('fs').promises;
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
        validate: input => input.length > 0 && input.length < 4 ? true : "Please enter 1-3 Characters."
    },
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixelImage",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data);
        console.log("Congratulations, you have Generated a logo.svg!");
    } catch (error) {
        console.error("Error writing to file:", error);
    }
}

async function init() {
    try {
        console.log("Starting init");
        const svg_file = "logo.svg";

        const answers = await inquirer.prompt(questions);

        const user_text = answers.text;
        const user_font_color = answers.textColor;
        const user_shape_color = answers.shapeColor;
        const user_shape_type = answers.pixelImage.toLowerCase();

        let user_shape;
        switch (user_shape_type) {
            case "square":
                user_shape = new Square();
                console.log("User selected Square shape");
                break;
            case "circle":
                user_shape = new Circle();
                console.log("User selected Circle shape");
                break;
            case "triangle":
                user_shape = new Triangle();
                console.log("User selected Triangle shape");
                break;
            default:
                console.log("Invalid shape!");
                return;
        }

        user_shape.setColor(user_shape_color);

        const svg = new Svg();
        svg.setTextElement(user_text, user_font_color);
        svg.setShapeElement(user_shape);
        const svgString = svg.render();

        console.log("Displaying shape:\n\n" + svgString);

        console.log("Shape generation complete!");
        console.log("Writing shape to file...");
        await writeToFile(svg_file, svgString);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

init();
