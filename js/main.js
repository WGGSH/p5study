const NUM = 50;
const DIST = 150;
var points = new Array();
var rotateSpeeds = new Array();

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  for(let i=0;i<NUM;i++){
    points.push(new p5.Vector(Math.random()*windowWidth-windowWidth/2,Math.random()*windowHeight-windowHeight/2));
  }
  for(let i=0;i<NUM;i++){
    rotateSpeeds.push(Math.random()/NUM-0.005);
  }

  colorMode(HSB,360,100,100,100,100);
}

function draw(){
  translate(width/2,height/2);
  blendMode(BLEND);
  background(0);
  blendMode(ADD);
  stroke(255);
  strokeWeight(10);

  for(let i=0;i<NUM;i++){
    points[i].rotate(rotateSpeeds[i]);
  }

  for(let i=0;i<NUM;i++){
    for(let j=i+1;j<NUM;j++){
      for(let k=j+1;k<NUM;k++){
        let dist1=vectorDistance(points[i],points[j]);
        let dist2=vectorDistance(points[j],points[k]);
        let dist3=vectorDistance(points[k],points[i]);
        if(dist1 + dist2 + dist3< DIST*3){
          let color = (dist1+dist2+dist3) / (DIST*3) * 360;
          for(let m=0;m<4;m++){
            strokeWeight(m+1);
            stroke(color,80,30,60);
            line(points[i].x,points[i].y,points[j].x,points[j].y);
            line(points[j].x,points[j].y,points[k].x,points[k].y);
            line(points[k].x,points[k].y,points[i].x,points[i].y);
          }
        }
      }
    }
  }

}

function vectorDistance(vec1,vec2){
  return Math.sqrt((vec1.x-vec2.x)*(vec1.x-vec2.x) + (vec1.y-vec2.y)*(vec1.y-vec2.y));
}
