console.log('promise');
// let data=1;
// console.log(data);
// data=2;
// setTimeout(()=>{
//     console.log(data);
// },3000)

// data=3
// console.log("last",data);


// Normal Function
// let stud = new Promise(function (resolve, reject) {
//     let a = 6;
//     let b = 6;
//     if (a == 5)
//         console.log("Resolved");
//     else
//         console.log("Reject");
// })
// stud.then((value) => { console.log(value) })
//     .catch((error) => { console.log(error) });


// arrow Function
//Resolve
// let student=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('done has been excuted')
//     });
// })
// student.then((item)=>{
//     console.log(item)
// })

// Reject
// let student=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('done has been excuted')
//     },2000);
// })
// student.then((item)=>{
//     console.log(item)
// }).catch((error)=>{
// console.log("Catch Block",error);
// })

// "Producing Code" (May take some time)
const mypromise=new Promise((resolve,reject)=>{
    let a=6;
    let b=6;
    if(a==b)
    console.log("Resolved"); // when successful
    else
    console.log("Reject"); // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
mypromise.then((value)=>{console.log(value)})
        .catch((error)=>{console.log(error)});
