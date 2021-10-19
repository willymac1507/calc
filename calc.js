const numberKeyPress = $(".number-key");
const functionKeyPress = $(".function-key");
const deleteKeyPress = $(".keydel");
const equalsKeyPress = $(".keyequals");
const changeTheme = $(".switch-background");
const themeSwitch = $(".switch-container");
let inputNumber = [];
let firstNumber = 0;
let secondNumber = 0;
let resultNumber = 0;
let maths = '';

$(".screen-display").html(0);

changeTheme.on("click", themeChanged);

numberKeyPress.on("click", (e) => {
    let key = e.target;
    numberPressed(key);
});

deleteKeyPress.on("click", () => {
    deletePressed();
})

functionKeyPress.on("click", (e) => {
    if (($(".screen-display").html().length) > 0) {
        if (inputNumber.length !== 0) {
            xferNumber = parseFloat(inputNumber.join(""));
        } else {
            xferNumber = parseFloat($(".screen-display"));
        };
        let func = e.target.innerHTML;
        functionPressed(func, xferNumber);
    };
});

equalsKeyPress.on("click", () => {
    equalsPressed();
});

function themeChanged() {
    if (themeSwitch.hasClass("label1")) {
        themeSwitch.removeClass("label1").addClass("label2");
        $("body").removeClass("theme1").addClass("theme2");
    } else if (themeSwitch.hasClass("label2")) {
        themeSwitch.removeClass("label2").addClass("label3");
        $("body").removeClass("theme2").addClass("theme3");
    } else {
        themeSwitch.removeClass("label3").addClass("label1");
        $("body").removeClass("theme3").addClass("theme1");
    }
};

function numberPressed(key) {
    if (inputNumber.length < 9) {
        inputNumber.push(key.innerHTML);
    };
    console.log(inputNumber);
    $(".screen-display").html(inputNumber);
};

function functionPressed(func, xferNumber) {
    if (func == 'x') {
        func = '*'
    };
    if (func == '÷') {
        func = '/'
    };
    if (maths) {
        secondNumber = xferNumber;
        maths = maths + secondNumber;
        firstNumber = eval(maths);
        maths = firstNumber + func;
        inputNumber = [];
    } else {
        firstNumber = xferNumber;
        maths = firstNumber + func;
        inputNumber = [];
    }
    $(".screen-display").html(firstNumber);
};

function equalsPressed() {
    if (maths) {
        secondNumber = parseFloat(inputNumber.join(''));
        maths = maths + secondNumber;
        firstNumber = eval(maths);
        maths = '';
        inputNumber = [];
    };
    $(".screen-display").html(firstNumber);
}



function deletePressed() {
    if (inputNumber.length > 0) {
        inputNumber.pop();
    };
    $(".screen-display").html(inputNumber);
}