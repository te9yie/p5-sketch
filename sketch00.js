let sketch00 = (p) => {
    p.setup = () => {
        p.createCanvas(200, 200);
    };
    p.draw = () => {
        p.background(222);
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
};

new p5(sketch00);
