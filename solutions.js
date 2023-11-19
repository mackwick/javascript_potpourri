//******************************* */
// SET ALARM
//******************************* */

const setAlarm = (employed, vacationing) => {
    if (employed === true && vacationing === false) {
        return true
    } else {
        return false
    }
}

console.log(setAlarm(true, true))
console.log(setAlarm(false, false))
console.log(setAlarm(false, true))
console.log(setAlarm(true, false))

//********************************* */
// COUNT ODD NUMBERS
//********************************* */

const oddNumberCount = (num) => {
    let arr = [];
    for (let i = num; i>0; i--) {
    if (i != num && i % 2 != 0) {
        arr.push(i);
    } 
   } 
   return arr.length;
}
console.log(oddNumberCount(9))

//********************************* */
// DISEMVOWELING TROLLS
//********************************* */

const trollsBeGone = (sentence) => {
    let newSentence = "";
    let letters = sentence.split('')
    for (let letter of letters) {
        if (letter.toLowerCase() !== "a" && letter.toLowerCase() !== "e" && letter.toLowerCase() !== "i" && letter.toLowerCase() !== "o" && letter.toLowerCase() !== "u") {
           newSentence = newSentence + `${letter}`;
        } 
    } return newSentence
}

console.log(trollsBeGone("This website is for losers LOL"))

//********************************* */
// BANK ACCOUNT SUMMARY
//********************************* */

const bankInfo = {
    savings: 100,
    checking: 65,
    moneyMarket: 5,
    creditCard: -5000
}

const bankAccountSummary = (obj) => {
    let total = 0;
    let amounts = Object.values(obj);
    amounts.forEach(num => {
        total += num;
    })
    return total
}

let bankTotal = bankAccountSummary(bankInfo)

const inTheRed = (money) => {
    return money < 0 ? true : false
}

console.log(inTheRed(bankTotal))



