const isPalindrome =(x) => {
    if (!x) return null;

    if (typeof x === "number") {
        x = Math.abs(x).toString();
    }
    
    if (typeof x !== "string") return null;

    x = x.trim().toLowerCase();
    
    if (x.length > 10) return null;

    if (x.length === 1) return true;

    const reversed = x.split("").reverse().join("");
    
    return x === reversed;
}
module.exports = isPalindrome;