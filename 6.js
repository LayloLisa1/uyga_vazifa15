function squareNumber(n) {
    const str = n.toString();
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const digit = parseInt(str[i]);
        result += (digit * digit).toString();
    }
    return parseInt(result);
}
console.log(squareNumber(3221)); 
console.log(squareNumber(3219)); 
