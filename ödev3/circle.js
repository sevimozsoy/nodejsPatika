const PI = 3.141592653589793;

function circleArea(r){
    return console.log(PI*PI*r);
}

function circleCircumference(r){
    return console.log(PI*2*r);
}


module.exports={
    circleArea,
    circleCircumference
}


//object destructuring
// export {
//     circleArea,
//     circleCircumference
// }