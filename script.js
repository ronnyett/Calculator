var input = document.getElementById("inputBox");


let str = "";

$("button").click(function () {
    if ($(this).text() === "=") {
        str = eval(str);
        input.value = str; /*to show value in input box*/


    }
    else if ($(this).text() === "AC") {
        str = "";
        input.value = str;
    }
    else if ($(this).text() === "DEL") {
        str = str.slice(0, str.length - 1);/*when DEL, remove 1 element from last */
        input.value = str;
    }
    else {
        str = str + $(this).text();
        input.value = str;
    }

});










