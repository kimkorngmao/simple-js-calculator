const resultDisplayBox = document.querySelector('.result-display-box');

function isLastCharSymbol(){
    const currentValue = resultDisplayBox.value;
    const lastChar = currentValue.charAt(currentValue.length - 1);
    return ["+", "-", "*", "/"].includes(lastChar);
}

function calculateBtn(btnValue){
    const currentValue = resultDisplayBox.value;

    if(isLastCharSymbol() && ["+", "-", "*", "/"].includes(btnValue)){
        return;
    }

    //check if there are no numbers before a symbol
    if(currentValue === '' && ["+", "-", "*", "/"].includes(btnValue)){
        return;
    }

    resultDisplayBox.value += btnValue;
}

function calculate(){
    try {
        resultDisplayBox.value = eval(resultDisplayBox.value);
    } catch (error) {
        resultDisplayBox.value = "Error";
    }
}

function backSpaceBtn(){
    var currentValue = resultDisplayBox.value;
    resultDisplayBox.value = currentValue.slice(0, -1);
}

function clearBtn(){
    resultDisplayBox.value = "";
}