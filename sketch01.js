const sketch01 = (p) => {
    p.setup = () => {
        p.createCanvas(200, 200);
        p.rectMode(p.CENTER);
    };
    p.draw = () => {
        p.background(200);
        p.rect(p.mouseX, p.mouseY, 80, 80);
    };
};

new p5(sketch01);
