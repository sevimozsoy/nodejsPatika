// import express from 'express';

// const app = express();

// app.get('/', (req,res) => {
//     res.send('Hello World')
// })

// const port = 3000;
// app.listen(port);

import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/index' , ctx => {
    ctx.status=200
    ctx.body=(`<h1>Index sayfasina hosgeldiniz.</h1>`)
})

router.get('/hakkimda', ctx => {
    ctx.status=200;
    ctx.body=(`<h1>Hakkimda sayfasina hosgeldiniz.</h1>`)
})

router.get('/iletisim' , ctx => {
    ctx.status=200;
    ctx.body=(`<h1>Iletisim sayfasina hosgeldiniz.</h1>`)
})

app.use(router.routes());

const port = 3000;
app.listen(port);