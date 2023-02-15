let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random()*100) + 1;
let no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Your guess is too low.Try again!";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
            guessed_nums;
        }
        else if(user_guess > answer){
            msg1.textContent = "Your guess is too high.Try again!";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
            guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent = "Great! You Win!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in "+ no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
        }
    }
}
