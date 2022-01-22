let randomCount = [];

function setup() {
    createCanvas(windowWidth, 400);

    stroke(0);
    fill(175);

    randomCount = Array.from({ length: 20 }).fill(0);
}

function draw() {
    let index = int(random(randomCount.length));

    randomCount[index]++;

    let w = width / randomCount.length;

    for (let x = 0; x < randomCount.length; x++) {
        rect(x * w, height - randomCount[x], w, randomCount[x]);
    }
}
