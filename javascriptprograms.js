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
        console.log(sum + " is an armstrong number.")
    }
    else {
        console.log(sum + " is not an armstrong number.")
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



