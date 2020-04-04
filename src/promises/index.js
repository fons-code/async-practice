function somethingWillHappen(){
    return new Promise((resolve,reject)=> {
        if(true){
            resolve('it works!')
        }else{
            reject('not working :(')
        }
    })
} 

function somethingWillHappen2(){
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(() => {
                resolve('working without problems')
            }, 3000);
        }else{
            const error = new Error('something failed');
            reject(error)
        }
    })
}

somethingWillHappen()
.then((response)=> console.log(response))
.catch((error)=> console.error(error))

somethingWillHappen2()
.then((response => console.log(response)))
.catch((error) => console.error(error))

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then((response) => {
    console.log('Array of responses', response)
    response.forEach((result) => console.log('resulting in',result))
})
.catch(error => console.error(error))