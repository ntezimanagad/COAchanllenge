function transformString(input) {
    const length = input.length;
    let result;

    if (length % 15 === 0) {
        result = input.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        result = input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        result = input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        result = input;
    }

    return result;
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
