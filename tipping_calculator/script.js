/* Pics to be hidden/displayed. */
let icecube = document.getElementById('icecube');
let smh = document.getElementById('smh');
let obama = document.getElementById('obama');
let idubbz = document.getElementById('idubbz');
let arnold = document.getElementById('arnold');

arnold.style.display = "block";

/* Shows the picture corresponding to tip option */
function showPic() {
    hidePics();

    //Default tip amount
    let value = ".25";

    value = document.getElementById('tip').value;

    if (value === "0.1") {
        icecube.style.display = "block";
    }
    else if (value === ".10") {
        smh.style.display = "block";
    }
    else if (value === ".15") {
        obama.style.display = "block";
    }
    else if (value === ".20") {
        idubbz.style.display = "block";
    }
    else {
        arnold.style.display = "block";
    }
}

/* Hides all pictures from displaying */
function hidePics() {
    icecube.style.display = "none";
    smh.style.display = "none";
    obama.style.display = "none";
    idubbz.style.display = "none";
    arnold.style.display = "none";

}

// Calculates the total price of the meal and price per person.
function calculate() {
    // Resets output.
    document.getElementById('total').innerHTML = '';
    document.getElementById('splitTotal').innerHTML = '';

    // Gets three inputs needed to compute total.
    const price =  document.getElementById('totalPrice').value;
    const tip =  document.getElementById('tip').value;
    const numPeople =  document.getElementById('people').value;

    // Computes total price and price per person.
    let totalPrice = +(price * (tip)) + +price;
    let pricePerPerson =  totalPrice / numPeople;
    // Rounds results to two decimal palces
    totalPrice = totalPrice.toFixed(2);
    pricePerPerson = pricePerPerson.toFixed(2);

    //Creates text output.
    totalPrice = document.createTextNode(totalPrice);
    pricePerPerson = document.createTextNode( pricePerPerson);

    // Adds text output to hidden div.
    document.getElementById('total').appendChild(totalPrice);
    document.getElementById('splitTotal').appendChild(pricePerPerson);

    // Displays hidden div with output.
    document.getElementById('output').style.display = 'block';
}