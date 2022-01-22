let w;

function setup() {
    createCanvas(700, 700);

    w = new Walker();

    background(0);
}

function draw() {
    w.step();
    w.display();
}

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    step() {
        let stepX = int(random(3)) - 1; // -1, 0, 1;
        let stepY = int(random(3)) - 1; // -1, 0, 1;

        this.x += stepX;
        this.y += stepY;
    }

    display() {
        stroke(255);
        point(this.x, this.y);
    }
}
