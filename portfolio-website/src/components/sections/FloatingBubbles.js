import React from 'react';
import Sketch from 'react-p5';

const skills = [
  'React', 'HTML', 'CSS', 'ASP.NET'
];

class Bubble {
  constructor(p, x, y, r, label) {
    this.p = p;
    this.pos = p.createVector(x, y);
    this.vel = p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1));
    this.r = r;
    this.label = label;
  }

  move() {
    const p = this.p;
    this.pos.add(this.vel);
  
    const center = p.createVector(p.width / 2, p.height / 2);
    const toCenter = p.constructor.Vector.sub(this.pos, center);
    const distance = toCenter.mag();
    const boundary = (p.width / 2) - this.r;
  
    if (distance > boundary) {
      // Normalize before modifying
      const normal = toCenter.copy().normalize();
  
      // Reflect velocity across normal
      const dot = this.vel.dot(normal);
      this.vel.sub(p.constructor.Vector.mult(normal, 2 * dot));
  
      // Push bubble back to boundary
      this.pos = center.copy().add(normal.mult(boundary));
    }
  
    // Minimum speed enforcement (no stuck bubbles)
    const minSpeed = 0.1;
    if (this.vel.mag() < minSpeed) {
      const angle = p.random(p.TWO_PI);
      this.vel = p.createVector(p.cos(angle), p.sin(angle)).mult(minSpeed);
    }
  }
  
  

  collide(other) {
    const p = this.p;
    const d = p.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < this.r + other.r) {
      const angle = p.atan2(this.pos.y - other.pos.y, this.pos.x - other.pos.x);
      const force = p.createVector(p.cos(angle), p.sin(angle)).mult(0.05); // 🧠 lower impulse
      this.vel.add(force);
      other.vel.sub(force);
  
      // 🧲 Optional speed cap
      const maxSpeed = 0.5;
      this.vel.limit(maxSpeed);
      other.vel.limit(maxSpeed);
    }
  }
  

  show() {
    const p = this.p;
    p.noStroke();
    p.fill('#fdd365');
    p.ellipse(this.pos.x, this.pos.y, this.r * 2);

    // Light reflection
    p.fill(255, 255, 255, 80);
    p.ellipse(this.pos.x - this.r / 3, this.pos.y - this.r / 3, this.r / 2);

    // Text
    p.fill(28, 28, 30);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(12);
    p.text(this.label, this.pos.x, this.pos.y);
  }
}

let bubbles = [];

export default function FloatingBubbles() {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(300, 300).parent(canvasParentRef);
    p.canvas.style.position = 'absolute';
    p.canvas.style.top = '0';
    p.canvas.style.left = '0';

    bubbles = skills.map(skill => {
      const r = 40;
      const x = p.random(r, p.width - r);
      const y = p.random(r, p.height - r);
      return new Bubble(p, x, y, r, skill);
    });
  };

  const draw = (p) => {
    p.background('#2c2c2e');
    // p.clear();
    bubbles.forEach((b1, i) => {
      b1.move();
      for (let j = i + 1; j < bubbles.length; j++) {
        b1.collide(bubbles[j]);
      }
      b1.show();
    });
  };

  return (
    <section
      style={{
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative', // ✅ required for absolute canvas to lock in
        margin: '0 auto',
        backgroundColor: '#2c2c2e',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)',
      }}
    >
      <Sketch setup={setup} draw={draw} />
    </section>
  );
}
