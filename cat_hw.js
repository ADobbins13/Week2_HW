
class Cat{
    constructor(furColor, eyeColor, age){
        this.furColor = furColor
        this.eyeColor = eyeColor
        this.age = age
    }
letOut(){
    console.log('Open the door.')
}
feed(){
    console.log('Pour the kibble.')
}
pet(){
    console.log('Brush your pet.')
}
}

// New Cats
let francis = new Cat('brown', 'green', 4)
let albert = new Cat('grey', 'blue', 6)

console.log(francis.eyeColor)
console.log(albert.age)

francis.letOut()
francis.feed()
francis.pet()

albert.letOut()
albert.feed()
albert.pet()