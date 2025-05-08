// RECUPERO ELEMENTI DEL DOM E/O DICHIARO ED INIZIALIZZO DELLE VARIABILI
const km = document.getElementById('km');
const age = document.getElementById('age');
const button = document.getElementById('calculate');
const ageResult = document.getElementById('age-result');
const kmResult = document.getElementById('km-result');
const priceResult = document.getElementById('price')

// CORPO DEL PROGRAMMA 
button.addEventListener('click', function (e) {
  e.preventDefault();

  // VALORI RECUPERATI DALLA FORM 
  let kmValue = parseInt(km.value);
  let ageValue = parseInt(age.value);

  // DEFINISCO LA COSTANTE MOLTIPLICATIVA DETERMINANTE DEL PREZZO 
  const kmUnit = 0.21;

  // DICHIARO LA VARIABILE CONTENENTE IL PREZZO NON INIZIALIZZATA
  let price;

  // DEFINISCO I PREZZI IN BASE ALL'ETA'
  if (ageValue < 18) {
    price = kmUnit * kmValue * 0.8;
  }
  else if (ageValue > 65) {
    price = kmUnit * kmValue * 0.6;
  }
  else {
    price = kmUnit * kmValue;
  }

  // console.log(price);

  // MOSTRO I RISULTATI IN PAGINA
  ageResult.innerHTML = `<strong>Kilometri : <br></strong>${kmValue}`;
  kmResult.innerHTML = `<strong>Età : <br></strong>${ageValue}`;

  priceResult.innerHTML = `<strong>Prezzo : <br>${price.toFixed(2)}€</strong>`;

  const h2 = document.getElementById('summary');
  h2.classList.remove('d-none');
  ageResult.classList.remove('d-none');
  kmResult.classList.remove('d-none');
  priceResult.classList.remove('d-none');
});

