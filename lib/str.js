console.log('\u0061');
// a 
console.log('\u20BB7');
// ₻7

console.log('\u{41}\u{42}\u{43}');
// ABC

// ES6对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。其中，大括号表示法与四字节的UTF-16编码是等价的。
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true

