let play = document.getElementById('play');
let howPlay = document.getElementById('howPlay');
let howPlayModal = document.getElementById('howPlayModal');
let closeModal = document.getElementById('closeModal')


howPlay.addEventListener('click', howPlayGame);
play.addEventListener('click', playGame);
closeModal.addEventListener('click', closeModalGame);

function closeModalGame() {
  howPlayModal.classList.remove('active');

}

function playGame() {
  // console.log('great')
}

function howPlayGame() {
  console.log(howPlayModal.classList)
  howPlayModal.classList.add('active')
  // console.log('ok')

}


//======================= TO DO =============================
//1. stworzenie inputa
//2. pobranie wartości z inputa
//3. przekazanie i stworzenie tyle kwadratów ile wskazał user
//4. dodanie class i coloru do zaznaczenia
//5. stworzenie buttona do losowania liczby
//6. wylosowanie liczby z przedziału od 0 do wartości wskazanej przez usera;
//7. user klika w kwadrat i sprawdzamy czy wybrana liczba to liczba wylosowana
//8. sprawdzamy czy liczba wylowowana jest <> od liczby usera
//9. podajemy komunikat ze liczba user jest <> od liczby wylosowanej
//10. kolorujemy te które są <> od liczby;
//11. kiedy user trafi liczbę pokazać komunikat że to jest właściwa liczba
//12. podpowiedz, że w max 7 ruchach można trafić liczbę;
//13. licznik kliknięć
//14. wartość usera nie może być ujemna i mniejsza od 0
//15. potwierdzenie add poprzez enter
//16. instrukcja/ How to play