// STEP 1
// //Named class
// function Cat () {}
// // Anonymous Class
// const Dog = function() {}
//-----------------------------------------------------------------------
// STEP 2
// const cat1 = new Cat();

// const dog1 = new Dog;

//-----------------------------------------------------------------------
// STEP 3
// class Animal {
//     constructor() {
//         console.log('The Animal has been created');
//     }    
// }
// const parrot = new Animal();
//-----------------------------------------------------------------------
// STEP 4
// class Animal {
//     constructor(capability) {
//         this.capability = capability;
//         console.log(`${capability}`);
//     }
// }
// const parrot = new Animal('This one speaks!');
//-----------------------------------------------------------------------
// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//         console.log(`Animla is of type ${type}, breed ${breed}, ${color} color, ${height} in height and ${length} in length`)
//     }
// }
// const parrot = new Animal('eveil', 'parquo', 'yellow', '2 ft', '5 in');
//-----------------------------------------------------------------------
// STEP 6
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
}
const parrot = new Animal('eveil', 'parquo', 'yellow', '2 ft', '5 in');

// STEP 7

// STEP 8

// STEP 9