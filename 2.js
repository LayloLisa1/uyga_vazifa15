class PascalTriangle {
    constructor(rows) {
        this.rows = rows;
    }

    generateTriangle() {
        let triangle = [];
        for (let i = 0; i < this.rows; i++) {
            triangle[i] = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    triangle[i][j] = 1;
                } else {
                    triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                }
            }
        }
        return triangle;
    }

    printTriangle() {
        let triangle = this.generateTriangle();
        let maxDigits = triangle[triangle.length - 1][Math.floor(triangle[triangle.length - 1].length / 2)].toString().length;
        for (let i = 0; i < this.rows; i++) {
            let rowString = "";
            for (let j = 0; j < this.rows - i; j++) {
                rowString += " ".repeat(maxDigits);
            }
            for (let j = 0; j <= i; j++) {
                let cellString = triangle[i][j].toString();
                rowString += " ".repeat(maxDigits - cellString.length) + cellString + " ".repeat(maxDigits);
            }
            console.log(rowString);
        }
    }
}
const rows = 5;
const pascalTriangle = new PascalTriangle(rows);
pascalTriangle.printTriangle();
