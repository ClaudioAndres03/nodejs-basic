
const { frutero, dinero } = require('./frutas');
const cowsay = require("cowsay")

//  Package.json y NPM
console.log(
    cowsay.say({
        text: "Klok Sicario Muuuuuu",
        e: "Oo",
        T: "U",
    })
);


frutero.forEach(fruta => {
    console.count(fruta);
});

console.log(dinero);

