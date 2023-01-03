let minutes2 = 20;
let heures2 = 2;
const secondes2 = 60;

function convert2(minutes2, heures2, secondes2) {
    return (secondes2 * minutes2) + (secondes2 * heures2 * 60);
}

console.log(convert2(minutes2, heures2, secondes2))