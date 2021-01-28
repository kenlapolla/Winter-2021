function Particle(startX, startY) {
    this.x = startX;
    this.y = startY;
    console.log(this);
    
}
let particles = [];
for (let index = 0; index < 100; index++) {
    particles[index] = new Particle(index, Math.random()*500 );
}


console.log(particles);