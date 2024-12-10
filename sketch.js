
function setup() {
  createCanvas(400, 400);
}
/*
 *  Description:  Use this program to explore variables and how to create a scalable drawing of your own.
 *
 */

var diameter = 300; // diameter of the yin-yang image
var centerX = 200; // x-coordinate for the center of the yin-yang image
var centerY = 200; // y-coordinate for the center of the yin-yang image

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background('black');

  strokeWeight(3);
  stroke(0);
  fill(255);
  ellipse(centerX, centerY, diameter + 3);
  fill(0);
  arc(centerX, centerY, diameter, diameter, 270, 90);
  noStroke();
  ellipse(centerX, centerY + diameter / 4, diameter / 2);
  fill(255);
  ellipse(centerX, centerY + diameter / 4, diameter / 8);
  ellipse(centerX, centerY - diameter / 4, diameter / 2);
  fill(0);
  ellipse(centerX, centerY - diameter / 4, diameter / 8);
  stroke(255);
  strokeWeight(5);

}