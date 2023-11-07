var maxTime = 50;
var maxTimePink = 60;
var butterflies = document.getElementsByTagName("body")[0];
var singleButterfly = document.getElementById("butterfly");
var pinkButterfly = document.getElementById("butterflyPink");
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = w.innerHeight || e.clientHeight || g.clientHeight;
var initialTop = butterflies.clientHeight * -1;
var butterflyCount = 300;
var pinkButterflyCount = 200;

document.addEventListener('DOMContentLoaded', (event) => {
    let redButterflyCount = 0;
  
    function butterflyClicked() {
      redButterflyCount++; 
  
      if (redButterflyCount >= 1) {
        window.location.href = 'beast.html'; 
      }
    }

    document.querySelectorAll('.flyingPink').forEach(butterfly => {
      butterfly.addEventListener('click', butterflyClicked);
    });
  });
  

for (var i = 0; i < butterflyCount; i++) {
  var ypos = Math.round(Math.random() * height);

  var createButterfly = document.createElement("div");
  createButterfly.innerHTML = singleButterfly.outerHTML;

  var speed = 1400 * (Math.random(100, 200) * maxTime + 1);
  createButterfly.setAttribute("class", "createbutterfly" + (3 - Math.floor(speed / 1000 / 8)));

  var speedDelay = 34000;

  butterflies.appendChild(createButterfly);
  createButterfly.animate(
    [
      {
        transform: "translate3d(" + width + "vw, " + initialTop + "vh, 0)"
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "vw, " + ypos + "vh, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speedDelay,
      iterations: 100
    }
  );
}

for (var j = 0; j < pinkButterflyCount; j++) {
  var yposPink = Math.round(Math.random() * height);

  var createButterflyPink = document.createElement("div");
  createButterflyPink.innerHTML = pinkButterfly.outerHTML;

  var speedPink = 1500 * (Math.random() * maxTimePink + 1);
  createButterflyPink.setAttribute("class", "createbutterflyPink" + (3 - Math.floor(speedPink / 1000 / 8)));

  var speedDelayPink = 50000;

  butterflies.appendChild(createButterflyPink);
  createButterflyPink.animate(
    [
      {
        transform: "translate3d(" + width + "vw, " + yposPink + "vh, 0)"
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "vw, " + initialTop + "vh, 0)"
      }
    ],
    {
      delay: Math.random() * -speedPink,
      duration: speedDelayPink,
      iterations: 100
    }
  );
}


