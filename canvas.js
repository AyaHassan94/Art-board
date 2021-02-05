var canva = document.getElementById("can");
var color;
var colon = document.getElementById("color");
var context = canva.getContext("2d");
var Free = document.getElementById("free");
var line = document.getElementById("line");
var circle = document.getElementById("cir");
var rect = document.getElementById("rect");
var remove = document.getElementById("remove");
let z = false;
let s = false;
let m = false;
let l = false;
let k = false;
colon.addEventListener("click", (e) => {
  color = document.getElementById("colo").value;
});
line.addEventListener("click", (e) => {
  m = true;
  z = false;
  s = false;
  k = false;
  l = false;
  canva.addEventListener("mousedown", (e) => {
    x1 = e.offsetX;
    y1 = e.offsetY;
    context.beginPath();
    context.moveTo(x1, y1);
  });
  canva.addEventListener("mouseup", (e) => {
    if (m === true) {
      x2 = e.offsetX;
      y2 = e.offsetY;
      context.lineTo(x2, y2);
      context.strokeStyle = color;
      context.stroke();
    }
  });
});

rect.addEventListener("click", (e) => {
  z = true;
  s = false;
  m = false;
  canva.addEventListener("mousedown", (e) => {
    x3 = e.offsetX;
    y3 = e.offsetY;
    context.beginPath();
  });
  canva.addEventListener("mouseup", (e) => {
    if (z === true) {
      x4 = e.offsetX;
      y4 = e.offsetY;
      context.rect(x3, y3, x4, y4);
      context.stroke();
      context.fillStyle = color;
      context.fill();
    }
  });
});
circle.addEventListener("click", (e) => {
  s = true;
  m = false;
  z = false;
  canva.addEventListener("mousedown", (e) => {
    x5 = e.offsetX;
    y5 = e.offsetY;
    context.beginPath();
  });
  canva.addEventListener("mouseup", (e) => {
    if (s === true) {
      x6 = e.offsetX;
      y6 = e.offsetY;
      let xSq = Math.pow(x6 - x5, 2);
      let ySq = Math.pow(y6 - y5, 2);
      let rad = Math.sqrt(xSq + ySq);
      context.arc(x5, y5, rad, 0, 2 * Math.PI);
      context.stroke();
      context.fillStyle = color;
      context.fill();
    }
  });
});

Free.addEventListener("click", (e) => {
  l = true;
  s = false;
  m = false;
  z = false;
  k = false;
  canva.addEventListener("mousedown", (e) => {
    x1 = e.offsetX;
    y1 = e.offsetY;
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 4;
    context.moveTo(x1, y1);
  });
  canva.addEventListener("mousemove", (e) => {
    if (l === true) {
      x2 = e.offsetX;
      y2 = e.offsetY;
      context.lineTo(x2, y2);
      context.stroke();
    }
  });
  canva.addEventListener("mouseup", (e) => {
    l = false;
  });
});
remove.addEventListener("click", (e) => {
  l = false;
  s = false;
  m = false;
  z = false;
  k = true;
  canva.addEventListener("mousedown", (e) => {
    x1 = e.offsetX;
    y1 = e.offsetY;
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 4;
    context.moveTo(x1, y1);
  });
  canva.addEventListener("mousemove", (e) => {
    if (k === true) {
      x2 = e.offsetX;
      y2 = e.offsetY;
      context.lineTo(x2, y2);
      context.stroke();
    }
  });
  canva.addEventListener("mouseup", (e) => {
    k = false;
  });
});
