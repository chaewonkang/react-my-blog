/* express 모듈 불러오고, app 변수에 express 담기 */
const express = require('express');
const app = express();

/* 4000번 포트 번호 할당 */
const PORT = process.env.PORT || 4000;

/* 서버 응답 출력 */
app.get('/', (req, res) => {
	res.send(`Welcome to HIVCD test`);
});

/* 서버 실행 */
app.listen(PORT, () => {
	console.log(`Server on : https://localhost:${PORT}/`);
})


