/*
   Milestone 3:
      - Create an array to keep track of the history of guesses
      - Push the most recent result to the array
      - Clear the history list on the DOM
      - Loop over the array of historical guesses
      - For each guess, append a new list-item to the guess history list
*/
const onSubmit = (event) => {
   event.preventDefault();

   const rawGuess = document.getElementById('guess-input').value;
   const currentGuess = Number(rawGuess);

   let result = '';
   if (currentGuess > correctNumber) {
      result = `Your guess was ${currentGuess}, and it is too high!`;
   } else if (currentGuess < correctNumber) {
      result = `Your guess was ${currentGuess}, and it is too low!`;
   } else {

     const audio = new Audio('./party_horn.mp3')
     audio.play();

     document.getElementById('game-body').classList.add('winner');

      result = `Your guess was ${currentGuess}, and it is correct!`;
   }
   // Push the result onto our global guesses array to keep track of it
   guesses.push(result);

   document.getElementById('result').innerText = result;

   // clear the inner HTML of the list. Inner HTML will contain
   // any children elements of the element, not just inner text.
   // <ul><li>This list-item is the innerHTML of the ul</li></ul>
   document.getElementById('guess-history').innerHTML = '';

   // Use .forEach to loop over every item in the guesses array!
   // .forEach expects to be given a function to call for every item
   // We can create an anonymous arrow function in place and pass it
   // in right here. Each item in the array will come in as the first
   // argument which we call `guessItem`. The second argument, which
   // we don't use, is the index of the array (0, 1, 2, etc)
   guesses.forEach((guessItem) => {

      // Create a NEW html element in memory of the li type (list item)
      let li = document.createElement('li');

      // Set the innerText to the current guess in our loop from the
      // first argument in our function definition
      li.innerText = guessItem;

      // Use the document API to find the guess-history ul element,
      // and append the list item as a child (innerHTML) of the ul tag
      document.getElementById('guess-history').appendChild(li);
   })

   document.getElementById('guess-input').value = '';
}

document.getElementById('game-form').addEventListener('submit', onSubmit);

const correctNumber = parseInt(Math.random() * 101);
console.log(`debug: correct number is ${correctNumber}`);

// Create a global array to store all of our guesses
const guesses = [];
