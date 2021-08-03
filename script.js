// Set variables for the elements
var billInput = document.getElementById('billInput');
var peopleInput = document.getElementById('peopleInput');
var btn6 = document.getElementById('btn6');
var cyan = "hsl(172, 67%, 45%)";
var darkCyan = "hsl(183, 100%, 15%)";
tipAmount = 0;

// When change of input
function changeOfInput(inputArea) { 
    // Calculate values for the outputs
    let perPerson = billInput.value * (tipAmount / 100) / 5;
    let total = perPerson + (billInput.value / peopleInput.value);
    total = total.toFixed(2);
    perPerson = perPerson.toFixed(2);
    $('#reset').addClass('reset-active');
    $('#reset').removeClass('reset-inactive');

    // Set the outputs
    if (billInput.value > 0 && peopleInput.value > 0) {
        $('#tipAmount').val('$' + perPerson);
        $('#tipTotal').val('$' + total);
    } 
    
    //Check if there are valid inputs in all fields if not set outputs to 0
    if (billInput.value == 0 || tipAmount == 0 || Number.isNaN(tipAmount) || peopleInput.value == 0) {
        $('#tipAmount').val('');
        $('#tipTotal').val('');
    }

    // Check if error message needs to be displayed
    if (billInput.value == '0' || billInput.value == '' && inputArea == "bill") {
        $("#billError").css('visibility', 'visible');
        $("#billInput").addClass('text-error');
    } else {
        $("#billError").css('visibility', 'hidden');
        $("#billInput").removeClass('text-error');
    }

    if (peopleInput.value == '0' || peopleInput.value == '' && inputArea == "people") {
        $("#peopleError").css('visibility', 'visible');
        $("#peopleInput").addClass('text-error');
    } else {
        $("#peopleError").css('visibility', 'hidden');
        $("#peopleInput").removeClass('text-error');
    }
}

// Check for change in the Bill input field
billInput.addEventListener("keyup", function (event) {
    changeOfInput("bill");
}, false);

// Check for change in the number of people field
peopleInput.addEventListener("keyup", function (event) {
    changeOfInput("people]");
}, false);

// Functions for tip buttons
function tipCalc(val, btn) {
    tipAmount = val;
    changeOfInput("");
    btnClasses = ['#btn1', '#btn2', '#btn3', '#btn4', '#btn5']

    for (let x = 0; x <= 5; x++) {
        $(btnClasses[x]).removeClass('activated');
    }
    $(btn).addClass('activated');

    console.log(btn);
    if (btn == '') {
        console.log('run');
        $('#reset').removeClass('reset-active');
        $('#reset').addClass('reset-inactive');
    }
}

// Click functions for the tip amounts
$("#btn1").click(function() {
    tipCalc(5, this);
    $(btn6).css('box-shadow', '0 0 0 0');
});

$("#btn2").click(function() {
    tipCalc(10, this);
    $(btn6).css('box-shadow', '0 0 0 0');
});

$("#btn3").click(function() {
    tipCalc(15, this);
    $(btn6).css('box-shadow', '0 0 0 0');
});

$("#btn4").click(function() {
    tipCalc(25, this);
    $(btn6).css('box-shadow', '0 0 0 0');
});

$("#btn5").click(function() {
    tipCalc(50, this);
    $(btn6).css('box-shadow', '0 0 0 0');
});

btn6.addEventListener("keyup", function (event) {
    btn6Change();
}, false);

btn6.addEventListener("click", function (event) {
    btn6Change();
}, false);

function btn6Change() {
    console.log(btn6.value);
    tipCalc(parseInt(btn6.value), this);
    $(btn6).css('box-shadow', 'inset 0 0 1px 1px var(--primary-cyan)');
}

// Reset button function
$("#reset").click(function() {
    billInput.value = '';
    peopleInput.value = '';
    tipCalc(0, '');
})