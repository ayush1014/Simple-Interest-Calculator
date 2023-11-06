function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var i = p*y*r/100;
    var a = parseInt(p) + parseFloat(i);
    var result = document.getElementById("result");
    var year = new Date().getFullYear()+parseInt(y);
    if (p<=0){
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }
    else{
        result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + r + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + a + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}

function resetCalculator() {
    // Reset input values to default
    document.getElementById("principal").value = '';
    document.getElementById("rate").value = 10.25; // Assuming this is your default rate
    document.getElementById("years").value = '';
    
    // Update the rate display to the default value
    document.getElementById("rate_val").innerText = '10.25';
    
    // Clear the result display
    document.getElementById("result").innerHTML = '';
    
    // Optionally, reset the range input (slider) visual back to the default value
    var rateSlider = document.getElementById("rate");
    rateSlider.value = rateSlider.defaultValue;
  }