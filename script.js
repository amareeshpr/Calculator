var displayValue = 0;
var prevValue = 0;
var result = 0;
var operation = false;
var operations = {
  addition: "+",
  subtraction: "-",
  multiply: "*",
  division: "/",
  none: false,
};

var actions = {
  percentage: false,
};

document.getElementById("result-container").textContent = displayValue;

function calculatePercentage(number, percentage) {
  return number * (percentage / 100);
}

document.getElementById("numberdot").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "." : ".";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number0").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "0" : "0";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number").addEventListener("click", function () {
  displayValue = -Number(displayValue);
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number1").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "1" : "1";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number2").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "2" : "2";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number3").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "3" : "3";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number4").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "4" : "4";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number5").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "5" : "5";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number6").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "6" : "6";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number7").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "7" : "7";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number8").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "8" : "8";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("number9").addEventListener("click", function () {
  displayValue = Number(displayValue) ? displayValue + "9" : "9";
  document.getElementById("result-container").innerHTML = displayValue;
});

document.getElementById("addition").addEventListener("click", function () {
  prevValue = Number(prevValue) + Number(displayValue);
  operation = operations.addition;
  displayValue = 0;
});

document.getElementById("subtraction").addEventListener("click", function () {
  if (operation == operations.subtraction) {
    prevValue = Number(prevValue) - Number(displayValue);
  } else {
    prevValue = prevValue
      ? Number(prevValue) - Number(displayValue)
      : Number(displayValue);
  }

  operation = operations.subtraction;
  displayValue = 0;
});

document.getElementById("multiply").addEventListener("click", function () {
  prevValue = prevValue
    ? Number(prevValue) * Number(displayValue)
    : Number(displayValue);
  operation = operations.multiply;
  displayValue = 0;
});

document.getElementById("division").addEventListener("click", function () {
  prevValue = prevValue
    ? Number(prevValue) / Number(displayValue)
    : Number(displayValue);
  operation = operations.division;
  displayValue = 0;
});

document.getElementById("backspace").addEventListener("click", function () {
  if (displayValue.length == 1) {
    displayValue = displayValue.slice(0, -1);
    displayValue = 0;
    document.getElementById("result-container").textContent = displayValue;
    return;
  } else if (displayValue == 0) {
    return;
  }
  displayValue = displayValue.slice(0, -1);
  document.getElementById("result-container").textContent = displayValue;
});

document.getElementById("acbtn").addEventListener("click", function () {
  operation = operations.none;
  displayValue = 0;
  prevValue = 0;
  document.getElementById("result-container").textContent = displayValue;
});

document.getElementById("percent").addEventListener("click", function () {
  actions.percentage = true;
  var percentofNumber = calculatePercentage(
    Number(prevValue),
    Number(displayValue)
  );
  document.getElementById("result-container").textContent = percentofNumber;
  displayValue = percentofNumber;
});

document.getElementById("equal").addEventListener("click", function () {
  if (operation == operations.addition) {
    result = Number(prevValue) + Number(displayValue);
    document.getElementById("result-container").textContent = result;
  } else if (operation == operations.subtraction) {
    result = Number(prevValue) - Number(displayValue);
    document.getElementById("result-container").textContent = result;
  } else if (operation == operations.multiply) {
    result = Number(prevValue) * Number(displayValue);
    document.getElementById("result-container").textContent = result;
  } else if (operation == operations.division) {
    result = Number(prevValue) / Number(displayValue);
    document.getElementById("result-container").textContent = result;
  }
});
