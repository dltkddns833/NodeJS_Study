var onUncaughtException = function(error){
    console.log('예외 발생');

    // 이벤트 제거
    process.removeLisener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);
/*
이벤트 한번만 연결
process.once('uncaughtException', onUncaughtException);
*/
var test = function(){
    setTimeout(test, 2000);
    error.error.error();
};
setTimeout(test,2000);