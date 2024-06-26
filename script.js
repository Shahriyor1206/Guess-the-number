let random = Math.floor(Math.random() * 100);

const startGame = () => {
   let inputEl = +document.querySelector('#input').value;
   let displayEl = document.querySelector('#display');

   if(random === inputEl){
      displayEl.innerHTML = 'Congats, You guessed the right number';
      displayEl.style.background = 'green';
   }else if (random < inputEl){
      displayEl.innerHTML = `Number is less then ${inputEl}`;
      displayEl.style.background = 'red';
   }else if (random > inputEl) {
      displayEl.innerHTML = `Number is greater then ${inputEl}`;
      displayEl.style.background = 'red';
   }
};

const reset = () => {
   window.location.reload();
}