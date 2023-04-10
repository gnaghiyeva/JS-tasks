//without function
let num = 90;
if (num < 50) {
    for (let i = 1; i < num; i++) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
}

else if (num > 50 && num <= 100) {
    for (let i = 1; i < num; i++) {
        if (i % 5 == 0) {
            console.log(i)
        }
    }
}

else if (num > 100) {
    for (let i = 1; i < num; i++) {
        if (i % 8 == 0) {
            console.log(i)
        }
    }
}






