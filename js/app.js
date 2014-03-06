var countup = function (n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            $("#count").append("fizz buzz<br>");
        } else if (i % 3 === 0) {
            $("#count").append("fizz<br>");
        } else if (i % 5 === 0) {
            $("#count").append("buzz<br>");
        } else {
            $("#count").append(i + "<br>");
        }
    }
};

$(document).ready(function () {
    $("#number").keydown(function (event) {
        num = +$("#number").val();
        if (event.keyCode == 13) {
            if (num.length === 0 || isNaN(num) || num <= 0 || num % 1 != 0) {
                alert("Please enter a positive integer");
            } else {
                $("#count").contents().remove();
                countup(num);
        }
        }
    });
    
    
//closes the document ready-function
                 });