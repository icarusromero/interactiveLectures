let jonSnowHealth = 100

jonSnowHealth = jonSnowHealth.toString()

console.log(typeof jonSnowHealth)

console.log('Jon\'s health is ' + jonSnowHealth)

let theWinnerIs = 'Jamie is the winner.'

let newWinner = theWinnerIs.replace('Jamie', 'Jon')

console.log(newWinner)

let newWinnerLower = newWinner.toLowerCase()

let newWinnerSplit = newWinnerLower.split(' ')

let newWinnerKebob = newWinnerSplit.join('-')

console.log(newWinnerKebob)