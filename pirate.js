// Class
class pirate{
    constructor(numOfEyes, hasHook, doubloonAmount){
        this.numOfEyes = numOfEyes
        this.hasHook = hasHook
        this.doubloonAmount = doubloonAmount
    }
// Method 1
affirmative(){
    console.log('ARRR!')
}
// Method 2
insult(){
    console.log('You Scallywag!')
}
// Method 3
greeting(){
    console.log('Ahoy maties!')
}
}

// Arrays
const blackPearl = ['captainJack', 'willTurner', 'hectorBarbossa']
const inferno = ['oneEyedWillie', 'mikey', 'data']

// New Pirates 1
let captainJack = new pirate(2, false, 'average')
let willTurner = new pirate(2, false, 'poor')
let hectorBarbossa = new pirate(2, false, 'rich')

// New Pirates 2
let oneEyedWillie = new pirate(1, false, 'rich')
let mikey = new pirate(2, false, 'rich')
let data = new pirate(2, false, 'rich')

// Pirate w/ properties logged
console.log(data)

// Arrays logged
console.log(inferno)
console.log(blackPearl)

// Attempt at forEach loop
blackPearl.forEach((item) => {
    console.log(item);
})

