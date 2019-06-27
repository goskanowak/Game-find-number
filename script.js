const play = document.getElementById('play');
const howPlay = document.getElementById('howPlay');
const howPlayModal = document.getElementById('howPlayModal');
const closeModal = document.getElementById('closeModal');
const message = document.querySelector('.message');
const stepOne = document.querySelector('.stepOne');
const stepTwo = document.querySelector('.stepTwo');
let userNumberSquare;
const add = document.getElementById('add');
const menuSquares = document.querySelector(".menuSquares");

howPlay.addEventListener('click', howPlayGame);
play.addEventListener('click', playGame);
closeModal.addEventListener('click', closeModalGame);
add.addEventListener('click', addBoxs)

function closeModalGame() {
  howPlayModal.classList.remove('active');
}

function playGame() {
  stepOne.classList.add('active');
  addBoxs();
}

function addBoxs() {
  userNumberSquare = document.getElementById('userNumberSquare').value;
  document.querySelector('.squares').textContent = userNumberSquare;
  userNumberSquare = parseInt(userNumberSquare);
  if (userNumberSquare <= 0 || userNumberSquare >= 500) {
    message.textContent = " The number of squares must be between 0 and 500";
  } else {
    for (let i = 0; i < userNumberSquare; i++) {
      let box = document.createElement('div');
      box.setAttribute('class', 'number');
      box.textContent = (i + 1);
      menuSquares.appendChild(box);
      message.innerHTML = '';
      stepOne.classList.remove('active');
      stepTwo.classList.add('active');
      const removeButton = play.removeEventListener('click', addBoxs);
    }
  };
}

function howPlayGame() {
  // console.log(howPlayModal.classList)
  howPlayModal.classList.add('active');
}

//======================= TO DO =============================

//4. dodanie class i coloru do zaznaczenia

//7. user klika w kwadrat i sprawdzamy czy wybrana liczba to liczba wylosowana
//8. sprawdzamy czy liczba wylowowana jest <> od liczby usera
//9. podajemy komunikat ze liczba user jest <> od liczby wylosowanej
//10. kolorujemy te które są <> od liczby;
//11. kiedy user trafi liczbę pokazać komunikat że to jest właściwa liczba
//12. podpowiedz, że w max 7 ruchach można trafić liczbę;
//13. licznik kliknięć

//15. potwierdzenie add poprzez enter


// ====================== DONE ========================
//1. stworzenie inputa
//2. pobranie wartości z inputa
//3. przekazanie i stworzenie tyle kwadratów ile wskazał user

//5. stworzenie buttona do losowania liczby
//6. wylosowanie liczby z przedziału od 0 do wartości wskazanej przez usera;





//14. wartość usera nie może być ujemna i mniejsza od 0 i większa od 500;
//16. instrukcja/ How to play