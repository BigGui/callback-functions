

// console.log(myFunction(5, 6));
// console.log(myFunction2(4, 1));

// function myFunction(a, b) {
//     return a + b;
// }

// const myFunction2 = function(a, b) {
//     return a + b;
// }


// function sum(a, b, c) {
//     c(a + b);
// }
// sum(5, 5, function(v) {
//     console.warn(`sum = ${v}.`);
// });
// sum(20, 30, console.log);
// sum(30, 30, alert);


// displayInConsole(51);

// function displayInConsole(value) {
//     console.log(`Le résultat est ${value}.`);
// }
// function displayAlert(value) {
//     alert(`Valeur =  ${value}.`);
// }

// sum(5, 6, displayInConsole);
// sum(15, 26, displayAlert);

const a = [120, 22, 26, 24, 30, 20, 240, 52];


// prout anonyme;
a.forEach((value, index) => {
    console.log(`${index} = ${value}`);
});
for (const index in a) {
    console.log(`${index} = ${a[index]}`);
}

let b = a.filter(v => v > 20)
let b2 = a.filter(function (value) {
    return value > 20;
})

let c = a.map(function (value) {
    return value * 3;
})
let c2 = a.map(v => v * 3);
console.log(a, c);

const players = [
    { name: 'Samir', score: 125 },
    { name: 'Tom', score: 520 },
    { name: 'Loanne', score: 214 },
    { name: 'Michel', score: 342 }
];

players.sort(function (a, b) {
    if (a.score < b.score) {
        return -1;
    }
    else if (a.score > b.score) {
        return 1;
    }
    return 0;
});
players.sort((a, b) => a.score - b.score);

console.log(players); 

const winner = players.reduce(function(a, b) {
    return a.score > b.score ? a : b;
});
console.log(winner); 

players
    .filter(p => p.score > 200)
    .sort((p1, p2) => p2.score - p1.score)
    .map(p => `${p.name} a obtenu un score de ${p.score}.`)
    .forEach(text => console.log(text));


function arraySum(array) {
    if (array.length === 1) return array[0];
    return array.pop() + arraySum(array);
}


const array = [12, 56, 52, 515, 2];
// console.log(arraySum(array));
// console.log(array.reduce((a, b) => a + b));
// console.log(array);

let sum = 0;
for (const value of array) {
    sum += value;
}
console.log(sum);

const char = {
    name: 'Michel',
    age: 50,
    talk: function() {
        console.log(`Je suis ${this.name} j'ai ${this.getAge()}`);
    },
    getAge: function() {
        return `${this.age} ans`;
    },
    crazyTalk: function() {
        setInterval(() => {
            this.talk();
        }, 1000);
    }
};

// console.log(char.talk);

char.crazyTalk();