var displayInputString = ''
var processInputString = '';
var answer = 0;
var previousOperator = '+';
var presentNumber = 0;
var presentDigitNumber = 0;
var presetDecimalNumber = 0;
var presentOperator = '+';
var previousAnswer = 0.0
var evaluateExpression = '';


function buttonPressed(buttonKey) {
    if(buttonKey == '=') {
        console.log('Screen cleared.');
        // document.getElementById("answer").innerHTML = '0';
        document.getElementById("input").innerHTML = '';
        answer = 0;
        previousOperator = '+';
        presentNumber = 0;
        previousAnswer = 0.0
        return;
    }

    if(buttonKey == 'c') {
        console.log('Screen cleared.');
        document.getElementById("answer").innerHTML = '0';
        document.getElementById("input").innerHTML = '';
        answer = 0;
        previousOperator = '+';
        presentNumber = 0;
        previousAnswer = 0.0
        return;
    }

    processInputString = processInputString.concat(buttonKey);

    if(buttonKey == '/' || buttonKey == '*' || buttonKey == '-' || buttonKey == '+') {
        previousOperator = buttonKey;
        presentNumber = 0;
        $("#input").append(` <span>${buttonKey}</span> `);
        return;
    }
    else {
        buttonParseKey = buttonKey;
        if(buttonKey === '.')
            buttonParseKey = '0.0'

        presentNumber = presentNumber * 10 + parseInt(buttonParseKey)
        evaluateExpression = `${previousAnswer}${previousOperator}${presentNumber}`
        console.log(evaluateExpression)
        previousAnswer = eval(evaluateExpression)

        // console.log(processInputString, " = ", previousAnswer);
        document.getElementById("answer").innerHTML = previousAnswer;
        $("#input").append(`${buttonKey}`);
    }
}