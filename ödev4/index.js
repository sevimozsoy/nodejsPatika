import { writeFile, readFile, appendFile, mkdir, rmdir } from 'fs';

// writeFile('employees.json','{"name":"Employee1 Name","salary":"2000"}',(err,data) =>{
//     if(err) throw err
//     console.log('Olusturuldu')
// })

readFile('employees.json', (err, data) => {
    if (err) throw err
    console.log(data)
})

// appendFile('employees.json', '\nveri degistirldi', (err, data) => {
//     if (err) throw err
//     console.log('Degistirildi')
// })

mkdir('silinecek', { recursive: true }, (err) =>{
    if(err) throw err
    console.log('olusturuldu')
})

rmdir('silinecek', (err) =>{
    if(err) throw err
    console.log('silindi')
})