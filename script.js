"use strict";

var toggle = 0;
var rgb = document.getElementById("rgb--1");
var chakraEl = document.querySelector(".CHAKRA");
var tryagain = document.querySelector(".try-again");
var statement0 = document.querySelector(".statement-0");
var statement1 = document.querySelector(".statement-1");
var fight1 = document.querySelector(".fight-1");
statement1.classList.add("hidden");
chakraEl.classList.add("hidden");
tryagain.classList.add("hidden");

var arr = [0, 0, 0, 0, 0, 0];
var logic = function () {
  if (toggle === 0) {
    statement1.classList.add("hidden");
    tryagain.classList.add("hidden");
    chakraEl.classList.add("hidden");
    statement0.classList.remove("hidden");
    fight1.classList.remove("hidden");
    rgb.classList.remove("hidden");
    document.getElementById("onea").style.backgroundColor = "#cece22";
    document.getElementById("threea").style.backgroundColor = "#222529";
    document.getElementById("again").style.color = "#222529";
    document.getElementById("w3--4").style.backgroundColor = "#222529";
    document.getElementById("w3--5").style.backgroundColor = "#222529";
    document.getElementById("w3--6").style.backgroundColor = "#222529";
    var tile = Math.floor(Math.random() * 3) + 1;
    console.log(tile);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var hex = (document.getElementById(`w3--${tile}`).style.backgroundColor =
      "#" + randomColor);
    for (var i = 1; i <= 3; i++) {
      if (i !== tile) {
        var randomColor = Math.trunc(Math.random() * 16777215).toString(16);
        document.getElementById(`w3--${i}`).style.backgroundColor =
          "#" + randomColor;
      }
    }
    var r, g, b;
    function hexToRgb() {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (result) {
        r = parseInt(result[1], 16);
        g = parseInt(result[2], 16);
        b = parseInt(result[3], 16);
        return r + ", " + g + ", " + b; //return 23,14,45 -> reformat if needed
      }
      return null;
    }
    rgb.textContent = `rgb(${hexToRgb(hex)})`;
    arr[tile - 1] = 1;
    for (let k = 0; k < 6; k++) {
      if (k !== tile - 1) {
        arr[k] = 0;
      }
    }
    document.querySelector(".w3-easya").addEventListener("click", function () {
      if (arr[0] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("w3--4").style.backgroundColor = "#138808";
        document.getElementById("w3--5").style.backgroundColor = "#138808";
        document.getElementById("w3--6").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--1").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
    document.querySelector(".w3-easyb").addEventListener("click", function () {
      if (arr[1] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("w3--4").style.backgroundColor = "#138808";
        document.getElementById("w3--5").style.backgroundColor = "#138808";
        document.getElementById("w3--6").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--2").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
    document.querySelector(".w3-easyc").addEventListener("click", function () {
      if (arr[2] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("w3--4").style.backgroundColor = "#138808";
        document.getElementById("w3--5").style.backgroundColor = "#138808";
        document.getElementById("w3--6").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--3").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
  } else if (toggle === 1) {
    document.getElementById("onea").style.backgroundColor = "#cece22";
    document.getElementById("threea").style.backgroundColor = "#222529";
    document.getElementById("again").style.color = "#222529";
    tryagain.classList.add("hidden");
    chakraEl.classList.add("hidden");
    statement0.classList.remove("hidden");
    statement1.classList.add("hidden");
    fight1.classList.remove("hidden");
    rgb.classList.remove("hidden");
    var tile = Math.floor(Math.random() * 6) + 1;
    console.log(tile);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var hex = (document.getElementById(`w3--${tile}`).style.backgroundColor =
      "#" + randomColor);
    for (var j = 1; j <= 6; j++) {
      if (j !== tile) {
        var randomColor = Math.trunc(Math.random() * 16777215).toString(16);
        document.getElementById(`w3--${j}`).style.backgroundColor =
          "#" + randomColor;
      }
    }
    var r, g, b;
    function hexToRgb() {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (result) {
        r = parseInt(result[1], 16);
        g = parseInt(result[2], 16);
        b = parseInt(result[3], 16);
        return r + ", " + g + ", " + b; //return 23,14,45 -> reformat if needed
      }
      return null;
    }
    rgb.textContent = `rgb(${hexToRgb(hex)})`;
    arr[tile - 1] = 1;
    for (let k1 = 0; k1 < 6; k1++) {
      if (k1 !== tile - 1) {
        arr[k1] = 0;
      }
    }
    document.querySelector(".w3-easya").addEventListener("click", function () {
      if (arr[0] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--1").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
    document.querySelector(".w3-easyb").addEventListener("click", function () {
      if (arr[1] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--2").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
    document.querySelector(".w3-easyc").addEventListener("click", function () {
      if (arr[2] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--3").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
    document.querySelector(".w3-harda").addEventListener("click", function () {
      if (arr[3] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--4").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
    document.querySelector(".w3-hardb").addEventListener("click", function () {
      if (arr[4] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--5").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
    document.querySelector(".w3-hardc").addEventListener("click", function () {
      if (arr[5] === 1) {
        chakraEl.classList.remove("hidden");
        tryagain.classList.add("hidden");
        document.getElementById("onea").style.backgroundColor = "#FF9933";
        document.getElementById("threea").style.backgroundColor = "#138808";
        document.getElementById("again").style.color = "#138808";
        statement0.classList.add("hidden");
        statement1.classList.remove("hidden");
        fight1.classList.add("hidden");
        rgb.classList.add("hidden");
      } else {
        document.getElementById("w3--6").style.backgroundColor = "#222529";
        tryagain.classList.remove("hidden");
      }
    });
  }
};
logic();
document.querySelector(".w3-easy").addEventListener("click", function () {
  toggle = 0;
  for (let a = 0; a < 6; a++) {
    arr[a] = 0;
  }
  logic();
});

document.querySelector(".w3-hard").addEventListener("click", function () {
  toggle = 1;
  for (let b = 0; b < 6; b++) {
    arr[b] = 0;
  }
  logic();
});

document.querySelector(".w3-new").addEventListener("click", function () {
  for (let c = 0; c < 6; c++) {
    arr[c] = 0;
  }
  logic();
});
