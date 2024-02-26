console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
        function addGuess() {
            const answer = Math.floor(Math.random() * 100) + 1;
            let attempts = 0;

            return function(guess) {
                attempts++;

                guess = parseInt(guess);
                if (isNaN(guess)) {
                    return "Invalid guess.";
                }

                if (guess === answer) {
                    return `That's correct, you guessed ${answer} in ${attempts} attempts.`;
                } else if (guess < answer) {
                    return `${guess} is too low.`;
                } else {
                    return `${guess} is too high.` ;
                }
            };
        }
        
        const guessNumber = addGuess();

        const guessForm = document.getElementById('guessForm');
        const guessInput = document.getElementById('guessInput');
        const resultDisplay = document.getElementById('result');

        guessForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const guess = guessInput.value;
            const result = guessNumber(guess);

            resultDisplay.textContent = result;
            
            let guessList = document.getElementById('guessContainer')
            let listItem = document.createElement("li")
            listItem.textContent = guessInput.value
            guessList.appendChild(listItem)
            
            guessInput.value = '';
        });
