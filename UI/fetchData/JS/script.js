console.log('This is my Api');

//Button with id myBtn
let myBtn = document.getElementById("myBtn");
//div with id content
let content = document.getElementById("content");

function getData(){
    url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then((response)=>{
        console.log("Inside first then");
        return response.json();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}

function postData(){
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"Almira","salary":"123","age":"23"}';
    datapost = {
        method : 'post',
        headers: {
            'Content-type' : 'application/json'
        },
        body: data
    }
    fetch(url,datapost ).then(response =>response.json())
    .then((data)=>console.log(data)
    )
}
postData();
