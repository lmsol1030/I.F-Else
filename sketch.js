function setup()
 {
  createCanvas(800, 600);
  noFill();
  stroke(255);
}

  function draw()
{
  background(255);
  if (mouseX < 300) {
  ellipse(200,200,100,100);
}

// draw function
if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
} else {
  ellipse(400, 200, 100, 100);
}

// draw function
if (mouseX < 100)

 {
  fill(255,171,255)
  ellipse(50, 200, 100, 100);
}

 else if (mouseX < 200)
{
  fill(255,171,255)
  rect(150, 200, 100, 100);
}
 
 else if (mouseX < 300)
{
    fill(255,171,255)
 ellipse(250, 200, 100, 100);
} 

else if (mouseX < 400)
{
  fill(255,171,255)
  rect(350, 200, 100, 100);
}

 else if (mouseX < 500)
{
    fill(255,171,255)
  ellipse(450, 200, 100, 100);
} 
else
 {
    fill(255,171,255)
  ellipse(550, 200, 100, 100);
}

}