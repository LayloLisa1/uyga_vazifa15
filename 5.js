class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const circle1 = new Circle(5);
console.log("Circle 1 yuzasi:", circle1.getArea());
console.log("Circle 1 perimetri:", circle1.getPerimeter()); 
const circle2 = new Circle(10);
console.log("Circle 2 yuzasi:", circle2.getArea());
console.log("Circle 2 perimetri:", circle2.getPerimeter());
