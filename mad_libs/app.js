//**************************** */
// MAD LIPS
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
    words.pluralNoun = num;
    const adv = prompt('Give me an adverb!');
    words.adverb = adv;
    const adj2 = prompt('Give me an another adjective!');
    words.anotherAdjective = adj2
    console.log(words)
}



startMadLib()