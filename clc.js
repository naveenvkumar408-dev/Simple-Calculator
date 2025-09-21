let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
  console.log(display.value);
}

function clearDisplay() {
  display.value = "";
  console.log(display.value);
}

function calculate() {
  try {
    display.value = eval(display.value); // evaluate expression
    console.log(display.value);
  } catch {
    display.value = "Error";
  }

}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}