// OS Module
var os = require('os');

console.log(os.hostname()); // PC 사용자 이름
console.log(os.type()); // 운영체제
console.log(os.platform()); // 플랫폼
console.log(os.arch()); // 비트
console.log(os.release()); // 버전
console.log(os.uptime()); // 실행된 시간
console.log(os.loadavg()); // 로드 에버리지 정보 배열
console.log(os.totalmem()); // 메모리
console.log(os.freemem()); // 사용가능한 메모리
console.log(os.cpus()); // CPU 정보
console.log(os.networkInterfaces()); // 네트워크 인터페이스 정보