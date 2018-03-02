// File System Module
var fs = require('fs');

var text = fs.readFileSync('chapter4/textFile.txt', 'utf8');
console.log(text);

// 비동기 방식
fs.readFile('chapter4/textFile.txt', 'utf8', function(error, data){
    console.log(data);
});

// 파일 쓰기
var data = 'Hello World..!';

fs.writeFile('chapter4/TextFileOtherWrite.txt', data, 'utf8', function(error){
    console.log('WRITE FILE ASYNS COMPLETE');
});

fs.writeFileSync('chapter4/TextFileOtherWrite.txt', data, 'utf8');
console.log('WRITE FILE SYNS COMPLETE');