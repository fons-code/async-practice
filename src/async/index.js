const doSomething = () =>{
    return new Promise((resolve,reject)=> {
        (true)
        ? resolve('everything ok')
        : reject('not working :(')
    })
}

const asyncFunction = async ()=>{
    const myValue = await doSomething()
    console.log(myValue)
}

asyncFunction();