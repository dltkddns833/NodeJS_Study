// 이벤트 강제 발생
process.on('exit', function(code){
    console.log('안녕히 가세요');
});

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중');