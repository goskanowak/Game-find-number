const play = document.getElementById('play');
// const howPlay = document.getElementById('howPlay');
const howPlayModal = document.getElementById('howPlayModal');
const closeModalHowPlay = document.getElementById('closeModalHowPlay');
const hint = document.getElementById('hint');
const closeModalHint = document.getElementById('closeModalHint')
const message = document.querySelector('.message');
const stepOne = document.querySelector('.stepOne');
const stepTwo = document.querySelector('.stepTwo');
let userNumberSquare;
const add = document.getElementById('add');
const menuSquares = document.querySelector(".menuSquares");
let randomNumber;
const randomValue = document.querySelector('.random');
const messageRandom = document.querySelector('.messageRandom');

howPlay.addEventListener('click', howPlayGame);
play.addEventListener('click', playGame);
closeModalHowPlay.addEventListener('click', closeModalGamePlay);
hint.addEventListener('click', hintGame);
closeModalHint.addEventListener('click', closeModalGameHint);
add.addEventListener('click', addBoxs);
randomValue.addEventListener('click', random);
menuSquares.addEventListener('click', checkNumber);

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
  // console.log(howPlayModal.classList)
  howPlayModal.classList.add('active');
}

function checkNumber(e) {
  let checkNumberUser = e.target;
  checkNumberUser = checkNumberUser.innerHTML;
  // console.log(typeof checkNumberUser);
  checkNumberUser = parseInt(checkNumberUser);
  if (checkNumberUser === randomNumber) {
    console.log('ok!');
    messageRandom.textContent = 'Congratulations, you win!';
  } else if (checkNumberUser <= randomNumber) {
    messageRandom.textContent = 'Your number is smaller than random number';
  } else if (checkNumberUser >= randomNumber) {
    messageRandom.textContent = 'Your number is bigger than random number';
  }
}

//======================= TO DO =============================

//4. dodanie class i coloru do zaznaczenia

//10. kolorujemy te które są <> od liczby;

//13. licznik kliknięć

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


//12. podpowiedz
//11. kiedy user trafi liczbę pokazać komunikat że to jest właściwa liczba
//14. wartość usera nie może być ujemna i mniejsza od 0 i większa od 500;
//16. instrukcja/ How to play