let genera = document.getElementById('generaBiglietto');
let km = document.getElementById('kmDaPercorrere');
let anni = document.getElementById('anniUtente');

genera.addEventListener('click', function(event){
    event.preventDefault();
    km = document.getElementById('kmDaPercorrere').value.trim();
    anni = document.getElementById('anniUtente').value.trim();

    let price = numeroKm * 0.21;
    let message;
    if(anni < 18 ){ 
                   price = price - price * 0.2;
                   // SCRIVO IL MESSAGGIO DA MOSTRARE A VIDEO E LO ASSEGNO ALLA VARIABILE MESSAGE
                   message = `Hai diritto ad uno sconto del 20%. Il prezzo del tuo biglietto è di ${price.toFixed(2)} €`;
                    }
    else if (anni > 65){
                   price = price - price * 0.4;
                   message = `Hai diritto ad uno sconto del 40%. Il prezzo del tuo biglietto è di ${price.toFixed(2)} €`;
                    }
    else 
    {
      message = `Il prezzo del tuo biglietto è ${price.toFixed(2)} €`;
    }
});