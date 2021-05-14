//-----------------------------------------------------------------------
// STEP 1
// //Named class
// function Cat () {}
// // Anonymous Class
// const Dog = function() {}
//-----------------------------------------------------------------------
// STEP 2
// const cat1 = new Cat();

// const dog1 = Dog();

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
// const parrot = new Animal('bird', 'parquo', 'yellow', '2 ft', '5 in');
//-----------------------------------------------------------------------
// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const parrot = new Animal('bird', 'parquo', 'yellow', '2 ft', '5 in');
// for (let key in parrot) {
//     console.log(`${key}`);
// }
//-----------------------------------------------------------------------
// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
//     speak = function() {
//         if (this.type == 'dog') {
//             console.log(`The ${this.color} dog is barking!`);
//         } else if (this.type == 'cat') {
//             console.log(`The ${this.color} cat is meowing!`);
//         }
//     }
// }
// const doggy1 = new Animal('cat', 'parquo', 'yellow', '2 ft', '5 in');
// doggy1.speak();
//-----------------------------------------------------------------------
// STEP 8
// function Animal (type, breed, color, height, length) {
//         let _type = type;
//         let _breed = breed;
//         let _color = color;
//         let _height = height;
//         let _length = length;

//         let checkType = function() {
//             if (_type == 'dog') {
//                 return 'dog';
//             } else {
//                 return 'cat';
//             }
//         }
//         this.speak = function () {
//             console.log(`The ${checkType()} has made a noise!`);
//         }
// }
// const doggy1 = new Animal('dog', 'parquo', 'yellow', '2 ft', '5 in');
// doggy1.speak();
//-----------------------------------------------------------------------
// STEP 9
// function findWords(string, subString, allowOverlapping) {

//     string += "";
//     subString += "";
//     if (subString.length <= 0) return (string.length + 1);

//     var n = 0,
//         pos = 0,
//         step = allowOverlapping ? 1 : subString.length;

//     while (true) {
//         pos = string.indexOf(subString, pos);
//         if (pos >= 0) {
//             ++n;
//             pos += step;
//         } else break;
//     }
//     return n;
// }
// let stringInput = prompt('Enter a string to search');
// let wordToSearch = prompt('Which word should I search for');
// console.log(`The word you specified appears ${findWords(stringInput,wordToSearch)} times`);
