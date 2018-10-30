var keyData = {
  a: {
    color: "purple",
    sound: new Howl({
      src: ["sounds/bubbles.mp3"]
    })
  },
  s: {
    color: "green",
    sound: new Howl({
      src: ["sounds/clay.mp3"]
    })
  },
  d: {
    color: "yellow",
    sound: new Howl({
      src: ["sounds/confetti.mp3"]
    })
  }
};

var sound1 = new Howl({
  src: ["sounds/bubbles.mp3"]
});
var sound2 = new Howl({
  src: ["sounds/clay.mp3"]
});

var circles = [];

function onKeyDown(event) {
  if (keyData[event.key]) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 500);
    newCircle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();
    circles.push(newCircle);
  }
}

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(0.9);
  }
}
