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
        let r = int(random(4));

        if (r === 0) {
            this.x++;
        } else if (r === 1) {
            this.x--;
        } else if (r === 2) {
            this.y++;
        } else {
            this.y--;
        }
    }

    display() {
        stroke(255);
        point(this.x, this.y);
    }
}
