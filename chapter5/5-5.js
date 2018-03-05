var custom = new process.EventEmitter();

custom.on('tick', function(code){
    console.log('이벤트 실행');
});

custom.emit('tick');