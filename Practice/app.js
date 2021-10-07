// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(let i = 1; i <=10; i++) {
//     console.log(i)
// }

// for(let i = 100; i >=0; i--) {
//     console.log(i)
// }


// const animals = ["lions", "tigers", "bears"]

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }


// for(i = 1; i <=10; i++) {
//     console.log(`i is: ${i}`)
//     for(j = 1; j <=3; j++) {
//         console.log(`   j is: ${j}`)
//     }
// }


// const letters = [
//     ["a", "b", "c"],
//     ["d", "e", "f", "z"],
//     ["g", "h", "i", "j"],
// ]

// for(let i = 0; i < letters.length; i++) {
//     // const row = letters[i];
//     console.log(`Row ${i + 1}`)
//     for(let j = 0; j < letters[i].length; j++) {
//         console.log(letters[i][j])
//     }
// }

// for(let i = 0; i < letters.length; i++) {
//     console.log(`Row ${i + 1}`)
//     const row = letters[i];
//     for(let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count)
// }


// const SECRET = "BabyHippo"

// let guess = prompt ("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt ("enter the secret code...")
// }
// console.log("congrats, you guessed the secret!") 


//Guessing Game

// let maximum = parseInt(prompt("Enter the maximum number"));

// while (!maximum){
//     maximum = parseInt(prompt("Enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let attempts = 1;

// let guess = parseInt(prompt("Enter your first guess"));


// while (guess !== targetNum) {
//     if (guess === "q") break;
//     attempts++;
//     if(guess < targetNum) {
//         guess = prompt("Too low. Guess again");
//     } else {
//         guess = prompt("Too high. Guess again.")
//     }
// }

// if (guess === "q"){
//     console.log ("You quit")
// } else {
//     console.log (`You got it! It took you ${attempts} guess(es)`)
// }

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

// // for(let i = 0; i < subreddits.length; i++) {
// //     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// // }

// for(let sub of subreddits){
//     console.log(`Visit reddit.com/r/${sub}`)
// }

function singSong(){
    console.log("DO")
    console.log("RE")
    console.log("MI")
}