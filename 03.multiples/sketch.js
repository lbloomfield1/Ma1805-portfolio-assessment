let rgb = [255,100,0];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(220);

  fill(rgb)

  let i = 0;
  while(i<100){
    r = random (20)
    circle(150,i,
    )
    i+=10;
  }

  for(let i=0; i<=100; i+=10){
    r = random(20);
    circle(150,i,i+r)
  }

}
