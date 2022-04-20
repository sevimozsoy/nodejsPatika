const arguments = process.argv.slice(2);

function alanBul(yaricap){
    const pi = 3;
    let alan = pi * yaricap * yaricap;
    console.log(alan);
}

alanBul(arguments[0]);