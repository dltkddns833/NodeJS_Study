// 예외처리

var fs = require('fs');

// 동기 처리
try{
    var data = fs.readFileSync('chapter4/textfile.txt', 'utf8');
    console.log(data);
}catch(e){
    console.log(e);
}

try{
    fs.writeFileSync('chapter4/textfile.txt', 'HelloWorld..!', 'utf8');
    console.log('FILE WRITE COMPLETE');
}catch(e){
    console.log(e);
}

// 비동기 처리
fs.readFile('chapter4/textfile.txt', 'utf8', function(error, data){
    if(error){
        console.log(error);
    } else{
        console.log(data);
    }
});

fs.writeFile('chapter4/textfile.txt','Hello World..!','utf8', function(error, data){
    if(error){
        console.log(error);
    } else{
        console.log('FILE WIRTE COMPLETE');
    }
});