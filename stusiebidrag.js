var antalar = 3;
var manader = 10;
var studiebidrag = 1250;

var Birthmonth = ("Enter birthmonth here");

var product = (antalar*manader*studiebidrag);

if (Birthmonth == "July" || "August" || "September") {
    console.log ("Ditt studiebidrag är ", product - 625*3, "kr");
} else {
    console.log ("Ditt studiebidrag är ", product, "kr");
}

