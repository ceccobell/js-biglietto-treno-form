
const generate_btn = document.getElementById("calculate-price");
generate_btn.addEventListener('click', function() {
    let full_name = document.getElementById("full_name").value;
    let km = document.getElementById("km").value; 
    let age = document.getElementById("select-age").value;

    let ticket_price = km * 0.21

    if (age == "minorenne") {
        ticket_price -= ticket_price * 0.2;
        console.log(ticket_price)
    } else if (age == "senior") {
        ticket_price -= ticket_price * 0.4;
        console.log(ticket_price)
    }
    console.log(ticket_price)
})