var express = require('express'); //설치한 express mudule을 불러와서 express변수에 담는다
var app = express(); //express를 실행하여 app object를 초기화 한다

app.set('view engine,''ejs'); //ejs를 사용하기 위해 express의 view engine에 set
app.use(express.static(__dirname+'/public')) //

app.get('/hello', function(req,res){
  res.render('hello',{name:req.query.nameQuery}); //쿼리를 통해 이름을 받는 코드, 모든 query는 req.query에 저장
});

app.get('/hello/:nameParam', function(req,res){
  res.render('hello', {name:req.params.nameParam}); //:으로 시작되는 route는 req.params에 저장됩니다.
});

var port = 3000; //사용할 포트 번호를 port변수에 담는다

app.listen(port, function(){ //서버가 실행되는 경우, port변수를 이용해 3000번 포트에 noe.js 서버를 연결한다
  console.log('server on! http://localhost:'+port); // 서버가 실행되면 콘솔창에 표시될 로그메세지
})
