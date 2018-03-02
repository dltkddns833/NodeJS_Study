// Console Method
console.log('output : %d', 273);
console.log('%d + %d = %d', 273, 52, 273 + 52);

console.log('%d + %d = %d', 273, 52, 273 + 52, 52273);
console.log('%d + %d = %d & %d', 273, 52, 273 + 52);

console.log('숫자 : %d + %d = %d', 273, 52, 273 + 52);
console.log('문자열 : %s', 'Hello World .. !', '특수 기호와 상관 없음');
console.log('JSON: %j', {name : 'RintIanTta'});

// Time Method
console.time('alpha');

var output = 1;
for(var i = 1; i <= 10; i++){
    output += i;
}

console.log('Result:', output);

console.timeEnd('alpha');