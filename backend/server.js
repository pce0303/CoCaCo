const express = require('express');
const app = express();
const path = require('path');  // path 모듈 사용
const content = require('./api/post');

app.listen(8080, ()=>{
    console.log('server on port 8080');
})

app.use(express.json()); // Parse JSON request body

app.use( '/', express.static( path.join(__dirname, '../frontend/dist') ));  
// 이 부분이 없으면 아래코드에서 index.html을 로드하지 못한다.
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'app/dist/index.html'));  
})
// 기본 경로 '/'을 통해 빌드된 dist/index.html 파일을 로드시킨다.