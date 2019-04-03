var r1 = new RegExp('[0-9]');

// test强制转换字符串
console.log(r1.test(1));
console.log(r1.test());             // = 传"undefined"
console.log(r1.test('11'));  // 未加完全匹配^$，贪婪模式

var r2 = new RegExp('^[0-9]$');

console.log(r2.test(11));   // 加了^$