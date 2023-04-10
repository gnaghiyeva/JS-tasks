//with function
function myFunction(number) {
    if (number < 50) {
        for (let i = 1; i < number; i++) {
            if (i % 3 == 0) {
                console.log(i + " ");
            }
        }
    }

    else if (number >= 50 && number <= 100) {
        for (let i = 1; i < number; i++) {
            if (i % 5 == 0) {
                console.log(i + " ");
            }
        }
    }

    else if (number > 100) {
        for (let i = 1; i < number; i++) {
            if (i % 8 == 0) {
                console.log(i + " ");
            }
        }
    }
}
let number = 40;
myFunction(number);

