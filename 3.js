class Magic {
    replace(a, b) {
        return this.replaceAll(this.data, a, b);
    }

    length(data) {
        return data.length;
    }

    toUpperCase(str) {
        const obj = {};
        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i);
            const upperChar = char.toUpperCase();
            obj[char] = upperChar;
        }
        return obj;
    }

    repeat(data, n) {
        let result = '';
        for (let i = 0; i < n; i++) {
            result += data;
        }
        return result;
    }

    count(str) {
        const counts = {};
        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i);
            counts[char] = (counts[char] || 0) + 1;
        }
        return counts;
    }

    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
}
const magic = new Magic();

console.log(magic.replace("Hello world", "o", "0")); 
console.log(magic.length("Hello"));
console.log(magic.toUpperCase("hello"));
console.log(magic.repeat("salom", 2)); 
console.log(magic.count("hello world")); 
