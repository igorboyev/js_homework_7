let sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

let winter_sports = sports.slice(0, 5);
let summer_sports = sports.slice(5);
let fruits = winter_sports.splice(2,1).concat(summer_sports.splice(2,2));

console.log(`*** Winter sports ***`);
for (let i=0; i<winter_sports.length; i++){
    console.log(winter_sports[i].join(`: `))
}
console.log(``);
console.log(`*** Summer sports ***`);
for (let i=0; i<summer_sports.length; i++){
    console.log(summer_sports[i].join(`: `));
}
console.log(``);
console.log(`*** Fruits ***`);
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i].join(`: `))
}