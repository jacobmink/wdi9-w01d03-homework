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
        console.log(i + 'fizzbuzz');
    }
    else if (i % 3 == 0) {
        console.log(i + 'fizz');
    }
    else if (i % 5 == 0) {
        console.log(i + 'buzz');
    }
    else {
        console.log(i);
    }
    
}
