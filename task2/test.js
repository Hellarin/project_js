
if (num<100) {

    console.log("НЕ Верно!");
} else if (num>100) {
    console.log("Много");
} else {
    console.log("Верно!");
};

switch (num) {
    case num < 49:
            console.log("НЕ Верно!");
            break;
    case num >100:
            console.log("Много");
            break;
    case num  > 80:
            console.log("Все еще Много");
            break;
    case 50:
            console.log("Верно!");
            break;
    default:
            console.log("что то пошло не так");
            break;
}

let num = 50;
// while (num < 55 ) {
//     console.log (num);
//     num++;
// }
do {
    console.log (num);
    num++;
}

while (num <55);

for (let i =1; i<8 ; i++) {
 if (i == 6) {
     continue;
 }
    console.log (i);
}