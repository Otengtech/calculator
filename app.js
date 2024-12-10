const buttonNumbers = document.querySelectorAll("#numbers");
const display = document.getElementById("display");

buttonNumbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.value += btn.innerHTML;
  });
});

function del() {
  display.value = display.value.slice(0,-1);
}

function delAll(){
    display.value = ""
}

function evaluateExpression(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "An error occured"
    }
}

function square(){
    display.value = (eval(display.value)*eval(display.value))
}