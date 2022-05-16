const http = require('http');

const server = http.createServer((req,res) => {
    
    const url = req.url;

    if(url === '/index'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>Index sayfasina hosgeldiniz!</h1>');
    }else if(url === '/hakkimda'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>Hakkimda sayfasina hosgeldiniz!</h1>');
    }else if(url === '/iletisim'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>Iletisim sayfasina hosgeldiniz!</h1>');
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write('404')
    }

    
    res.end();
})

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu ${port} de başlatıldı.`);
});