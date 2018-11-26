'use strict'

let stars = [];
let speed;

function setup(){
  createCanvas(640, 480);
  for (let i =0; i < 800; i ++){
    stars[i] = new Star();    
  }
}

function draw(){
  ellipse(50, 50, 80, 80);
}
