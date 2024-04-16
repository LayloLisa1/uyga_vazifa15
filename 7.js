class Box {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    getVolume() {
        return this.length * this.width * this.height;
    }

    static totalVolume(boxes) {
        let total = 0;
        for (let box of boxes) {
            total += box.getVolume();
        }
        return total;
    }
}
const box1 = new Box(2, 3, 4);
const box2 = new Box(1, 2, 3);
const box3 = new Box(3, 4, 5);

console.log("Box 1 volume:", box1.getVolume()); 
console.log("Box 2 volume:", box2.getVolume()); 
console.log("Box 3 volume:", box3.getVolume()); 

const total = Box.totalVolume([box1, box2, box3]);
console.log("Total volume of all boxes:", total); 
