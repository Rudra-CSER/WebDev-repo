//gen random color

const RandomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Start And Stop bttn Logic 
let IntervalStatr;
const startGenarateColor = function () {
  IntervalStatr = setInterval(StartBttn, 1400);
  function StartBttn() {
    document.body.style.backgroundColor = RandomColor();
  }
};

const stopGenarateColor = function () {
  clearInterval(IntervalStatr);
};

//selecting the buttons

document.getElementById('start').addEventListener('click', startGenarateColor);
document.getElementById('stop').addEventListener('click', stopGenarateColor);
