
console.log("Running Sal's Strawberries")

function writeForm() {
    // Get the form data
    let fruitPeople = GLOBAL_user.uid
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const name = document.getElementById("name").value;
    const fruitQuantity = document.getElementById("fruitQuantity").value;
    console.log("fruitpplworks")

    firebase.database().ref('/' + fruitPeople).set(
        {
            name: name,
            fruit: favoriteFruit,
            fruitNumber: fruitQuantity,
        }
    )
}
// var userName = prompt("please enter your name. " + name)
// var favFood = prompt("jello " + name + ", what is your favourite food?")
// console.log(userName + " likes " + favFood)

function helloWorld() {
    console.log("Running helloWorld()")
    firebase.database().ref('/').set(
        {
            message: 'works'
        }
    )
}

function byeWorld() {
    console.log("Running byeWorld()")
    firebase.database().ref('/').set(
        {
            message: 'WORKS.'
        }
    )
}

function list() {
    console.log("Running list()")
    firebase.database().ref('/').set(
        {
            sector1: {
                consumers: {
                }
            }
        }
    )
}
function makeDude() {
    console.log("Running make dude()")
    let user = "mr.dude";
    let score = 0;
    firebase.database().ref('/sector1/consumers/' + user).set(
        score
    );
}