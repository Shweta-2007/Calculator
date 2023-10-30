const displayAreaEl = document.querySelector("#displayArea");
const clearEl = document.querySelector("#clear");
const oneEl = document.querySelector("#one");
const twoEl = document.querySelector("#two");
const plusEl = document.querySelector("#plus");
const threeEl = document.querySelector("#three");
const fourEl = document.querySelector("#four");
const minusEl = document.querySelector("#minus");
const fiveEl = document.querySelector("#five");
const sixEl = document.querySelector("#six");
const multiplyEl = document.querySelector("#multiply");
const sevenEl = document.querySelector("#seven");
const eightEl = document.querySelector("#eight");
const divideEl = document.querySelector("#divide");
const equalEl = document.querySelector("#equal");
const nineEl = document.querySelector("#nine");
const zeroEl = document.querySelector("#zero");
const decimalEl = document.querySelector("#decimal");

let currentDisplay = " ";

oneEl.addEventListener("click", function () {
  currentDisplay += 1;
  displayAreaEl.value = currentDisplay;
});
twoEl.addEventListener("click", function () {
  currentDisplay += 2;
  displayAreaEl.value = currentDisplay;
});
threeEl.addEventListener("click", function () {
  currentDisplay += 3;
  displayAreaEl.value = currentDisplay;
});
fourEl.addEventListener("click", function () {
  currentDisplay += 4;
  displayAreaEl.value = currentDisplay;
});
fiveEl.addEventListener("click", function () {
  currentDisplay += 5;
  displayAreaEl.value = currentDisplay;
});
sixEl.addEventListener("click", function () {
  currentDisplay += 6;
  displayAreaEl.value = currentDisplay;
});
sevenEl.addEventListener("click", function () {
  currentDisplay += 7;
  displayAreaEl.value = currentDisplay;
});
eightEl.addEventListener("click", function () {
  currentDisplay += 8;
  displayAreaEl.value = currentDisplay;
});
nineEl.addEventListener("click", function () {
  currentDisplay += 9;
  displayAreaEl.value = currentDisplay;
});
decimalEl.addEventListener("click", function () {
  currentDisplay += ".";
  displayAreaEl.value = currentDisplay;
});
zeroEl.addEventListener("click", function () {
  currentDisplay += 0;
  displayAreaEl.value = currentDisplay;
});
plusEl.addEventListener("click", function () {
  currentDisplay += "+";
  displayAreaEl.value = currentDisplay;
});
minusEl.addEventListener("click", function () {
  currentDisplay += "-";
  displayAreaEl.value = currentDisplay;
});
multiplyEl.addEventListener("click", function () {
  currentDisplay += "*";
  displayAreaEl.value = currentDisplay;
});
divideEl.addEventListener("click", function () {
  currentDisplay += "/";
  displayAreaEl.value = currentDisplay;
});
clearEl.addEventListener("click", function () {
  currentDisplay = " ";
  displayAreaEl.value = currentDisplay;
});
equalEl.addEventListener("click", function () {
  let result = eval(currentDisplay);
  displayAreaEl.value = result;

});

