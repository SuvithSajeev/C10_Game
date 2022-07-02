var marks = [60,65,70,75,80,85];

function setup() 
{
  createCanvas(400,400);

  marks_avg();
}

function draw() 
{
background(51);

}

function marks_avg(){
  var sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
  var avg = sum / marks.length;
  console.log(avg);
}

