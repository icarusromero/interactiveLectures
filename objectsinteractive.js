let person = {
    firstName: 'Bong',
    lastName: 'Water',
    age: 34
}

let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'dr. pepper'
}
const {dessert} = meal
//console.log(dessert)

const{appetizer, entree} = meal
// console.log(appetizer)
// console.log(entree)

const {drink: bestSoda} = meal
// console.log(bestSoda)

// for (let key in person){
//     console.log(key)
// }

// for (key in person){
//     console.log(person[key])
// }

person.job = 'Statistical Analysis and Date Reconfiguration'

person['pets'] = ['Chicken', 'Duck']

// for (let key in person){
//     console.log(key)
// }

let teams = {
    teamOne: ['ryan', 'the proffesor'],
    teamTwo: ['genie', 'demon'],
    teamThree: ['bingly', 'barbie'],
    teamFour: ['bobby', 'mario'],
    teamFive: ['monique', 'dick']
}

delete teams.teamThree

// for (let team in teams){
//     console.log(team)
// }

class Dog{
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting() {
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }
}

 let lassie = new Dog('Lassie', 'Collie', 18)
// console.log(lassie.name)

let beethoven = new Dog('Beethoven', 'St. Bernard', 12)

// console.log(beethoven.breed)

lassie.greeting()

beethoven.greeting()

for (key in lassie) {
    console.log(lassie[key])
}