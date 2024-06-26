
const generate_btn = document.getElementById("calculate-price");
generate_btn.addEventListener('click', function() {
    let full_name = document.getElementById("full_name").value;
    let km = document.getElementById("km").value; 
    let age = document.getElementById("select-age").value;

    let ticket_price = km * 0.21

    if (age == "minorenne") {
        ticket_price -= ticket_price * 0.2;
        console.log(ticket_price)
        // piccola funzione che inserisce il tipo di biglietto a schermo in base all'età 
        document.getElementById("ticket_type").innerText = "Biglietto under 18"
    } else if (age == "senior") {
        ticket_price -= ticket_price * 0.4;
        console.log(ticket_price)
        // piccola funzione che inserisce il tipo di biglietto a schermo in base all'età
        document.getElementById("ticket_type").innerText = "Biglietto over 65"
    } else if (age == "adulto") {
        // piccola funzione che inserisce il tipo di biglietto a schermo in base all'età
        document.getElementById("ticket_type").innerText = "Biglietto Standard"
    }
    ticket_price = ticket_price.toFixed(2);
    document.getElementById("name").innerText = full_name
    document.getElementById("ticket_price").innerText = ticket_price 
})

