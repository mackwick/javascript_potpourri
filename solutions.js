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
    let arr = []
   for (let i = num; i>0; i--) {
    if (i != num && i % 2 != 0) {
        arr.push(i)
    } 
   } 
   return arr.length
}
console.log(oddNumberCount(20))

//********************************* */
// DISEMVOWELING TROLLS
//********************************* */



//********************************* */
// BANK ACCOUNT SUMMARY
//********************************* */



//********************************* */
// MADLIBS
//********************************* */



