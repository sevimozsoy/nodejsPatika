// import {readFile} from 'fs';
// import { writeFile } from 'fs';
// import { Buffer } from 'buffer';
// import { appendFile } from 'fs';
// // import {unlink} from 'fs';
// import { mkdir } from 'fs';
import { rmdir } from 'fs'

//DOSYA OKUMAK
// readFile('password.txt' ,'utf-8', (err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

//DOSYA OLUŞTURMAK
// const data = new Uint8Array(Buffer.from('Merhaba!'));
// writeFile('generated.txt', data, (err) =>{
//     if(err) throw err;
//     console.log('Dosya Oluşturuldu!')
// })

//DOSYA DEĞİŞTİRMEK
// appendFile('generated.txt', 'degistirldi', (err) =>{
//     if(err) throw err;
//     console.log('Basarili sekilde degistirldi')
// })

//DOSYA SİLMEK
// unlink('password.txt',(err) =>{
//     if(err) throw err
//     console.log('Dosya basarili bir sekilde silindi!')
// })

//KLASÖRLER OLUŞTURMAK
// mkdir('uploads/img', {recursive:true}, (err) =>{
//     if(err) throw err
//     console.log('Recursive:true oluşturulmak istenilen klasörlerin başındaki dosyayı da oluşturmasını sağlar.')
// })

//KLASÖR SİL
rmdir('uploads/img', (err) => {
    if (err) throw err
    console.log('silindi')
})