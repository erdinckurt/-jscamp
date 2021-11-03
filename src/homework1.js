console.log("*".repeat(50))

//1. Ödev
console.log("Fonksiyona gönderdiğimiz her sayının asal olup olmadığını bulma")
function isPrimeNumber(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true
        if (numbers[i] <= 0) {
            console.log(`${numbers[i]} Negatif sayılar asal sayı olamaz`)
            continue
        }
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(`${numbers[i]} Asal sayıdır`)
        } else {
            console.log(`${numbers[i]} Asal sayı değildir`)
        }
    }
}

isPrimeNumber(7, 43, -77, 129, 153)


console.log("*".repeat(50))

//2. Ödev
console.log("Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulma")
function isFriendlyNumber(x, y) {
    let xSum = 0, ySum = 0;
    for (let i = 0; i < x; i++) {
        if (x % i == 0)
            xSum += i;
    }
    for (let i = 0; i < y; i++) {
        if (y % i == 0)
            ySum += i;
    }
    let isFriend = (xSum == y && ySum == x);
    console.log(isFriend ? `${x} ve ${y} sayıları arkadaş sayılardır.` : `${x} ve ${y} sayıları arkadaş sayılar değildir.`);
}
isFriendlyNumber(220, 284);
isFriendlyNumber(2620, 2924);
isFriendlyNumber(5020, 5564);
isFriendlyNumber(6233, 6367);


console.log("*".repeat(50))

//3. Ödev
console.log("1000'e kadarki tüm mükemmel sayıları listeleyen program")
function findPerfectNumber() {
    for (let i = 1; i < 1000; i++) {
        let total = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total += j
            }
        }

        if (i == total) {
            console.log(i + " Mükemmel Sayıdır")
        }
    }
}
findPerfectNumber()


console.log("*".repeat(50))

//4. Ödev
console.log("1000'e kadarki tüm asal sayıları listeleyen program")
function findPrimeNumbers() {
    let primes = [];

    for (let i = 1; i < 1000; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime && i > 1) {

            primes.push(i)
        }

    }

    console.log(...primes);
}

findPrimeNumbers();