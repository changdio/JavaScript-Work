// Odd or Even //
function num(x) {
    if (x % 2 == 0) {
        console.log(x, " is an even number.")
    }
    else {
        console.log(x, " is an odd number.")
    }
}

// Armstrong //
function armstrong(n) {
    var arr = String(n).split("")
    console.log(arr)
    var sum = 0

    for (i = 0; i < arr.length; i++) {
        var t = arr[i] ** (arr.length)
        sum = t + sum
    }

    if (sum == n) {
        console.log(n + " is an armstrong number.")
    }
    else {
        console.log(n+ " is not an armstrong number.")
    }

}

// Palindrome //
var word = "bob"
var reversed = word.split("").reverse().join("")

if (word == reversed) {
    console.log(word + " is a palindrome.")
} else {
    console.log(word + " is not a palindrome (" + reversed + ")")
}

// Triangle pattern
for (i = 1; i < 5; i++) {
    console.log("*".repeat(i))
}

// Sum of prime numbers from 1 to n
function prime(a) {

    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}

function sumprime(b) {
    var sum = 0;
    for (var i = 2; i <= b; i++) {
        if (prime(i)) {
            sum += i;
        }
    }
    console.log(sum);
}

// Factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        console.log("Factorial of " + num + " is 1");
    }
    else if (num < 0) {
        console.log("Please enter a positive integer!");
    }
    else {
        var factnum = num;
        for (i = num - 1; i > 0; i--) {
            num = num * i;
        }
        console.log("Factorial of " + factnum + " is " + num);
    }
}

// Least Common Multiple
function lcm(n1, n2) {

    var min = Math.min(n1, n2);

    while (true) {
        if (min % n1 == 0 && min % n2 == 0) {
            console.log("LCM of " + n1 + " and " + n2 + " is " + min);
            break;
        }
        min++;
    }
}

// Greatest Common Divisor
function gcd(n1, n2) {
    while (n2) {
        var t = n2;
        n2 = n1 % n2;
        n1 = t;
    }
    return n1;
}

// Reverse string
function rev(word) {
    var reversed = word.split("").reverse().join("");
    console.log(reversed);
}

// Print factors
function factor(num) {
    console.log("Factors of " + num + ":")
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}

// Perfect Number
function perfect_num(n) {
    var temp = 0;
    for (var i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            temp += i;
            console.log(i);
        }
    }

    if (temp === n && temp !== 0) {
        console.log(n + " is a perfect number.");
    }
    else {
        console.log(n + " is not a perfect number.");
    }
}

// Fibonacci
function fib(num) {
    // when num is equal to 1, it returns 0 and 1  
    if (num == 1) {
        return [0, 1];
    }
    else {
        // it continuously calls the recur function till n-1  
        total = fib(num - 1);
        /* push function add previous two terms and returns store the result into the total variable. */
        total.push(total[total.length - 1] + total[total.length - 2]);
        return total;
    }
}

// Sorting
function order(x, y, z) {
    var a = [x, y, z];
    console.log(a.sort());
    console.log(a.reverse());
}

// Prime Number
function prime(a) {
    if (a == 1) {
        return false;
    }
    else if (a == 2) {
        return true;
    }
    else {
        for (i = 2; i < a; i++) {
            if (a % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function isprime(a) {
    if (prime(a) == true) {
        console.log(a + " is a Prime Number.");
    }
    else {
        console.log(a + " is NOT a Prime Number.");
    }
}

