process.on('exit', function(code){
    console.log('안녕히 가세요');
});

process.on('uncaughtException', function(code){
    console.log('예외 발생!!!');
});

var count = 0;
var test = function(){
    count = count + 1;
    if(count > 3){
        return;
    }

    // 예외 강제 발생
    setTimeout(test, 2000);
    error.error.error();
};
setTimeout(test, 2000);