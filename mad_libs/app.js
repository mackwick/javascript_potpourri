//**************************** */
// MAD LIBS
//**************************** */

//console.log("hi")

const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
}

const startMadLib = () => {
    const num = prompt('Give me a number!');
    words.number = num;
    const adj = prompt('Give me an adjective!');
    words.adjective = adj;
    const pnoun = prompt('Give me a plural noun!');
    words.pluralNoun = pnoun;
    const adv = prompt('Give me an adverb!');
    words.adverb = adv;
    const adj2 = prompt('Give me an another adjective!');
    words.anotherAdjective = adj2
    alert(
        `Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb}, which ultimately lead them to ${words.anotherAdjective} fame.`
    ) 
    circleBack()
}

startMadLib()

//**************************** */
// HUNGRY FOR MORE?
//**************************** */

function circleBack() {
    const answer = prompt("Do you want to play again? If yes, type 'y', if no, type 'n'.")
    if (answer.toLowerCase() === "y") {
        startMadLib()
    } else if (answer.toLocaleLowerCase() === "n") {
        alert("Ok byyyyye")
    } else {
        alert("You gotta make a choice! Please type 'y' or 'no'.");
        circleBack()
    }
}

