// desafio 1

// var name = window.prompt("What's your name?")
// var age = window.prompt("How old are you?")

// if (age < 18) {
//     window.alert("You submited that you are :" + age + ": years old, " + name + ".");
//     window.alert("You must be at least eighteen years old to visit this site");
// }
//     else if (age > 18 && age < 101 ) {
//         window.alert("You are old enough to visit the site!");
//         window.alert("Welcome " + name + "!");
//     }
// else {
//     window.alert("You must be honest about your age, " + name + ".");
// }


// desafio 2

// window.addEventListener("load", function() {
//     this.setTimeout (
//         function open(event){
//             document.querySelector(".cookiealert").style.
//             display = "block";
//         },
//         1000
//     )
// });

// document.querySelector("#acceptcookies").addEventListener
//     ("click", function(){
//         document.querySelector(".cookiealert").style.display =
//         "none";
// });

// document.querySelector("#declinecookies").addEventListener
//     ("click", function(){
//         document.querySelector(".cookiealert").style.display =
//         "none";
//     alert("you can no longer make any purchases")
// });


// desafio 3

alert('Help us find what you are looking for');

body: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
    let input = prompt(`Tell us what are your favorite genres and books (${i},${j})`, '');
  
    if (!input) 
      
    break body;
    
    }
}

alert('Thank you!');