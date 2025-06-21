





const task = new Promise((resolve, reject)=>
{
    //do some work
    setTimeout(()=>{
        console.log("Do hard word!!!")
    },4000);
    //if success - resolve()
   
    //if error - reject()
    if( Math.random() > 0.5)
        resolve();
    else
        reject();

})

task.then(()=>
{
    console.log("Everething is good!!!!");
}).catch(()=>
{
    console.error("Something went wrong")
})


console.log("Continue work......");
