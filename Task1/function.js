function myFunction(num) {
    if (num % 7 == 0) {
        return ("7-ye bolunur.")
    }

    else {
        for (let i = 0; i < num; i++) {

            if (num % 7 != 0) {

                if ((num % 7) > 3) {
                    num++;

                }
                else {
                    num--;
                }
            }

        }
        return num;
    }

}
num = 19;
console.log(myFunction(num));