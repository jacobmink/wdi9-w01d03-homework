// EASY GOING
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// GET EVEN
for (let i = 0; i <= 200; i+=2) {
    console.log(i);
}

// EXCITED KITTEN

const kitty_array = ['...human...why you taking pictures of me?...',
                    '...the catnip made me do it...',
                    '...why does the red dot always get away...'];

for (let i = 0; i < 20; i++) {
    console.log(`${i} Love me, pet me! HSSSSSS!`);
    if (i % 2 == 0) {
        let rando = Math.floor(Math.random() * 3);
        console.log(kitty_array[rando]);
    }
}

// FIZZBUZZ
for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' fizzbuzz');
    }
    else if (i % 3 == 0) {
        console.log(i + ' fizz');
    }
    else if (i % 5 == 0) {
        console.log(i + ' buzz');
    }
    else {
        console.log(i);
    }
}

// GETTING TO KNOW YOU
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

// 1)
shahzad[0] = 'Gameboy';
console.log(shahzad);
// 2)
daniel[1] += 1;
console.log(daniel);
// 3)
ryan[2] = 'Gotham City';
console.log(ryan);
// 4)
reuben.pop(2);
reuben.push('Chicago');
console.log(reuben);
// 5)
jim.pop(2);
jim.push('Marrakesch','New Orleans','Istanbul');
console.log(jim);
jim.splice(2,1);
console.log(jim);

// YELL AT THE NINJA TURTLES
// 1)
const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// 2)
for (let i = 0; i < turtles.length; i++) {
    console.log(turtles[i].toUpperCase());
}
// 3)
for (let i = 0; i < turtles.length; i++) {
    const split_turtles = turtles[i].split('');
    for (let j = 0; j < split_turtles.length; j+=2) {
        split_turtles[j] = split_turtles[j].toUpperCase();
    }
    const join_turtles = split_turtles.join('');
    console.log(join_turtles);
}

// RETURN OF THE CLOSETS
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// Alien Attire
const kristynsShoe = kristynsCloset.splice(0,1)[0];
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);
console.log(kristynsCloset);

// Dress 'em Up
const kout1 = [];
const kout2 = [];
const kout3 = [];
const kristynOutfits = [kout1,kout2,kout3];
const tout1 = [];
const tout2 = [];
const tout3 = [];
const thomOutfits = [tout1,tout2,tout3];
let placeholder = 0;
const new_thomCloset = thomsCloset.flat();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < kristynOutfits.length; j++) {
        let rando = Math.floor(Math.random() * kristynsCloset.length);
        kristynOutfits[j].push(kristynsCloset[rando]);
    }
}
for (let k = 0; k < 5; k++) {
    for (let m = 0; m < thomOutfits.length; m++) {
        let rando = Math.floor(Math.random() * new_thomCloset.length);
        thomOutfits[m].push(new_thomCloset[rando]);
    }
} 
console.log(kristynOutfits);
console.log(thomOutfits);

// Dirty Laundry
for (i = 0; i < kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

// Inventory
for (i = 0; i < thomsCloset.length; i++) {
    console.log(thomsCloset[i]);
}