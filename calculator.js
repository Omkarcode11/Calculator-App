const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const tempResultE1 = document.querySelector('.temp-result');
const numberE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearE1 = document.querySelector('.all-clear');
const lastClearE1 = document.querySelector('.last-clear');

let dis1Num = '';
let dis2Num = '';
let result = '';
let lastOperation = '';
let haveDot = false;

numberE1.forEach((num) => {
  num.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2E1.innerText = dis2Num;
  });
});

operationE1.forEach((operation) => {
  operation.addEventListener('click', (e) => {
    if (!dis2Num) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = Number(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

equalE1.addEventListener('click', (e) => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2E1.innerText = result;
  tempResultE1.innerText = ' ';
  dis2Num = result;
  dis1Num = '';
});

clearE1.addEventListener('click', (e) => {
  display1E1.innerHTML = '0';
  display2E1.innerHTML = '0';
  dis1Num = ' ';
  dis2Num = ' ';
  result = ' ';
  tempResultE1.innerHTML = '0';
});

lastClearE1.addEventListener('click', (e) => {
  display2E1.innerText = '0';
  dis2Num = ' ';
});

function clearVar(name = ' ') {
  dis1Num += dis2Num + ' ' + name + ' ';
  display1E1.innerText = dis1Num;
  display2E1.innerHTML = '0';
  dis2Num = '';
  tempResultE1.innerText = result;
}

function mathOperation() {
  if (lastOperation === 'X') {
    result = Number(result) * Number(dis2Num);
  } else if (lastOperation === '-') {
    result = Number(result) - Number(dis2Num);
  } else if (lastOperation == '+') {
    result = Number(result) + Number(dis2Num);
  } else if (lastOperation == '/') {
    result = Number(result) / Number(dis2Num);
  } else if (lastOperation == '%') {
    result = Number(result) % Number(dis2Num);
  }
}

window.addEventListener('keydown', (e) => {
    console.log(e.key)
  if (
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '4' ||
    e.key === '3' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.'
  ) {
    clickButtonEl(e.key);
  } else if (e.key === '%' || e.key === '/' || e.key === 'X' || e.key === '-' || e.key === '+') {
    clickOperation(e.key);
  } else if(e.key === "*"){
    clickOperation("X")
  }else if (e.key==="Enter" || e.key === "="){
    clickEqual()
  }else if (e.key==='Delete'){
    allClear();
  }else if (e.key==="Backspace"){
    clickClear()
  }
});

function clickButtonEl(key) {
  numberE1.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function clickOperation(key) {
  operationE1.forEach((button) => {
    if (button.innerHTML === key) {
      button.click();
    }
  });
}

function clickEqual(){
    equalE1.click()
}
function clickClear(){
    lastClearE1.click()
}
function allClear(){
    clearE1.click()
}