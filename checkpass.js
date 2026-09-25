function checkPassword(passwords) {
    let i = 0;
    do {
        if (passwords[i] == "1234") {
            return "Password Correct";
        }
        i++;
    } while (i < passwords.length);

    return "Password Failed";
}

console.log(checkPassword(["1234", "5678", "abcd"]));
console.log(checkPassword(["5678", "abcd", "efgh"]));
console.log(checkPassword(["abcd", "efgh", "1234"]));