class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = (Math.atan(this.y / this.x)) * 180 / Math.PI;
        this.magnitude = Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    // calculates the direction from the x and y attributes
    generateDirection() {
        this.direction = (Math.atan(this.y / this.x)) * 180 / Math.PI;
    }
    // calculates the magnitude from the x and y attributes
    generateMagnitude() {
        this.magnitude = Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    // calculates the x and y from the magnitude and direction attributes
    generateXY() {
        this.x = this.magnitude * Math.cos(this.direction);
        this.y = this.magnitude * Math.sin(this.direction);
    }
    // returns the direction 
    get dir() {
        return this.direction;
    }
    // returns the magnitude
    get mag() {
        return this.magnitude;
    }
    // returns the dot product of two vectors
    static dotProd(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }
    // returns the cross product of two vectors
    static crossProd(v1, v2) {
        return (v1.x * v2.y) - (v1.y * v2.x);
    }
    // returns the distance between two vectors.
    static dist(v1, v2) {
        return Math.sqrt(((v2.x - v1.x) ** 2) + ((v2.y - v1.y) ** 2));
    }
    // normalizes the vector
    normalize() {
        this.x /= this.magnitude;
        this.y /= this.magnitude;
        this.generateMagnitude();
    }
    // scales the vector
    scale(num) {
        this.x *= num;
        this.y *= num;
        this.generateMagnitude();
    }
    // rotate the vector
    rotate(angle) {
        this.direction = (this.direction + angle) % 360;
        this.generateXY;
    }
    // returns the angle between two vectors
    static angleBetween(v1, v2) {
        const dotmagmag = Vector.dotProd(v1, v2) / (v1.mag * v2.mag);
        let angle;
        angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag)));
        angle = angle * Math.sign(1);
        angle = angle * 180 / Math.PI;
        return angle;
    }
    // checks if two vectors have the same x and y
    static equality(v1, v2) {
        if (v1.x === v2.x && v1.y === v2.y) {
            return true;
        }
        return false;
    }
    // returns a random vector
    static random() {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;
        return new Vector(x, y);
    }
}

function converter(sentence){
    let capitalized = []
    let words = sentence.split(" ") //split the sentence into words
    words.forEach(word => { 
        let capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1) //capitalize the first letter of every word
        capitalized.push(capitalizedWord)         
    })
    let converted = capitalized.join(" ") 
    return converted
}

module.exports = converter