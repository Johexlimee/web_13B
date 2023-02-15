fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((json) =>{
    for (let obj of json){
        console.log(obj);
    }
})
.catch((error) => console.error(error))
.finally(console.info("Ha finalizado la peticion"));
