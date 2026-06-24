//palindrome checker
//isPalindrome() -> boolean
//abc -> false
const isPalindrome = require("./tdd");
test("returns false for 'abc'", ()=>{
    const result = isPalindrome("abc");
    expect(result).toBe(false);
});
//aba -> true
test("returns true for 'aba'", ()=>{
    const result = isPalindrome("aba");
    expect(result).toBe(true);
});
//abccba -> true
test("returns true for 'abccba'", ()=>{
    const result = isPalindrome("abccba");
    expect(result).toBe(true);
});
//no input -> null
test("returns null for no input", ()=>{
    const result = isPalindrome();
    expect(result).toBeNull();
});
//null -> null
test("returns null for null input", ()=>{
    const result = isPalindrome(null);
    expect(result).toBeNull();
});
//single character -> true
test("returns true for single character", ()=>{
    const result = isPalindrome("a");
    expect(result).toBe(true);
});
//12321 -> true
test("returns true for '12321'", ()=>{
    const result = isPalindrome("12321");
    expect(result).toBe(true);
});
//123321 -> true
test("returns true for '123321'", ()=>{
    const result = isPalindrome("123321");
    expect(result).toBe(true);
});
//123 -> false
test("returns false for '123'", ()=>{
    const result = isPalindrome("123");
    expect(result).toBe(false);
});
//negaive number -121 -> true
test("returns true for -121", ()=>{
    const result = isPalindrome(-121);
    expect(result).toBe(true);
});
//boolean,{}, [], ()=>{} -> null
test("returns null for boolean,{}, [], ()=>{}  input", ()=>{
    const result = isPalindrome({});
    expect(result).toBeNull();
});
//Aba -> true
test("returns true for 'Aba'", ()=>{
    const result = isPalindrome("Aba");
    expect(result).toBe(true);
});
// "       aba        " -> true
test("returns true for '       aba        '", ()=>{
    const result = isPalindrome("       aba        ");
    expect(result).toBe(true);
});
// length > 10 -> null
test("returns null for input length greater than 10", ()=>{
    const result = isPalindrome("abcdefghijklmnopqrstuvwxyz");
    expect(result).toBeNull();
});
//multiple inputs -> ignore rest and check only the first one
test("returns true for multiple inputs, checking only the first one", ()=>{
    const result = isPalindrome("aba", "abc");
    expect(result).toBe(true);
});


