const play = document.getElementById('play');
// const howPlay = document.getElementById('howPlay');
const howPlayModal = document.getElementById('howPlayModal');
const closeModalHowPlay = document.getElementById('closeModalHowPlay');
const hint = document.getElementById('hint');
const closeModalHint = document.getElementById('closeModalHint');
const message = document.querySelector('.message');
const stepOne = document.querySelector('.stepOne');
const stepTwo = document.querySelector('.stepTwo');
let userNumberSquare;
const add = document.getElementById('add');
const menuSquares = document.querySelector(".menuSquares");
let randomNumber;
const randomValue = document.querySelector('.random');
const messageRandom = document.querySelector('.messageRandom');
const countClick = document.querySelector('.countClick');
let counter = 0;
const playAgain = document.querySelector('.playAgain');
userAdd = document.querySelector('.userAdd');

howPlay.addEventListener('click', howPlayGame);
play.addEventListener('click', playGame);
closeModalHowPlay.addEventListener('click', closeModalGamePlay);
hint.addEventListener('click', hintGame);
closeModalHint.addEventListener('click', closeModalGameHint);
add.addEventListener('click', addBoxs);
randomValue.addEventListener('click', random);
menuSquares.addEventListener('click', checkNumber);
playAgain.addEventListener('click', again);

function closeModalGamePlay() {
  howPlayModal.classList.remove('active');
}

function hintGame() {
  hintModal.classList.add('active');
}

function closeModalGameHint() {
  hintModal.classList.remove('active');
}

function playGame() {
  stepOne.classList.add('active');
  addBoxs();
}

function again() {
  window.location.reload(true);
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
      const removeButton = play.removeEventListener('click', addBoxs, false);
      menuSquares.classList.add('noActive');
    }
  };
}

function random() {
  randomNumber = Math.floor((Math.random() * userNumberSquare) + 1);
  console.log(randomNumber);
  messageRandom.innerHTML = "Step 3: Find the number";
  randomValue.classList.add('noActive');
  menuSquares.classList.remove('noActive');
}

function howPlayGame() {
  howPlayModal.classList.add('active');
}

function checkNumber(e) {
  let checkNumberBox = e.target;
  let checkNumberUser = checkNumberBox.innerHTML;
  checkNumberUser = parseInt(checkNumberUser);
  if (checkNumberUser === randomNumber) {
    messageRandom.textContent = 'Congratulations, you win!';
    checkNumberBox.classList.add('green');
    menuSquares.removeEventListener('click', checkNumber);
    playAgain.classList.add('active');
  } else if (checkNumberUser <= randomNumber) {
    messageRandom.textContent = 'Your number is smaller than random number';
    for (i = 0; i < checkNumberUser; i++) {
      menuSquares.children[i].classList.add('red');
    };
  } else if (checkNumberUser >= randomNumber) {
    messageRandom.textContent = 'Your number is bigger than random number';
    for (i = checkNumberUser; i <= userNumberSquare; i++) {
      menuSquares.children[i - 1].classList.add('red');
    };
  }
  counter++;
  userAdd.textContent = 'You click: ' + counter;
}

//===================== TO DO =============================



//15. potwierdzenie add poprzez enter

// ====================== DONE ========================
//1. stworzenie inputa
//2. pobranie wartości z inputa
//3. przekazanie i stworzenie tyle kwadratów ile wskazał user

//5. stworzenie buttona do losowania liczby
//6. wylosowanie liczby z przedziału od 0 do wartości wskazanej przez usera;
//7. user klika w kwadrat i sprawdzamy czy wybrana liczba to liczba wylosowana
//8. sprawdzamy czy liczba wylowowana jest <> od liczby usera
//9. podajemy komunikat ze liczba user jest <> od liczby wylosowanej
//10. kolorujemy te które są <> od liczby;
//11. kiedy user trafi liczbę pokazać komunikat że to jest właściwa liczba
//12. podpowiedz
//13. licznik kliknięć
//14. wartość usera nie może być ujemna i mniejsza od 0 i większa od 500;
//16. instrukcja/ How to play
// 17. po wskazaniu poprawnej liczby, zatrzymanie licznika i usunięcie nasłuchowania na checkNumber