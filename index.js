var express = require('express'); //설치한 express mudule을 불러와서 express변수에 담는다
var app = express(); //express를 실행하여 app object를 초기화 한다

app.get('/', function(req, res){ //'/'위치에 'get'요청을 받는 경우
  res.send('Hello World!'); //'hello world!'를 보낸다
});

var port = 3000; //사용할 포트 번호를 port변수에 담는다

app.listen(port, function(){ //서버가 실행되는 경우, port변수를 이용해 3000번 포트에 noe.js 서버를 연결한다
  console.log('server on! http://localhost:'+port); // 서버가 실행되면 콘솔창에 표시될 로그메세지
})
