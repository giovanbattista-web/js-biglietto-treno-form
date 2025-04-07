// RECUPERO ELEMENTI DEL DOM E/O DICHIARAZIONE ED INIZIALIZZAZIONE DELLE VARIABILI
const km = document.getElementById('km');
const age = document.getElementById('age');
const button = document.getElementById('calculate');
const ageResult = document.getElementById('age-result');
const kmResult = document.getElementById('km-result');
const priceResult = document.getElementById('price')

// CORPO DEL PROGRAMMA 
button.addEventListener('click', function(e){
  e.preventDefault();
  // valori recuperati dalla form
  let kmValue = parseInt(km.value);
  let ageValue = parseInt(age.value);
  // definizione della costante moltiplicativa determinante del prezzo
  const kmUnit = 0.21;
  // dichiaro la variabile contenente il prezzo non inizializzata 
  let price;
  // definisco i prezzi in base all'età
  if(ageValue < 18){
    price = kmUnit * kmValue * 0.8;
  }
  else if(ageValue > 65){
    price = kmUnit * kmValue * 0.6;
  }
  else {
  price = kmUnit * kmValue;
  }
  // console.log(price);
  // mostro i risultati in pagina
  ageResult.innerText = ageValue;
  kmResult.innerText = kmValue;

  priceResult.innerHTML = `<strong>${price.toFixed(2)}</strong>`;
  

});