let hello= ()=>{
    document.getElementById("head-1").innerHTML+="Hello. How Are You?"
}
let comp= ()=>{
 
let workerObj= new Worker('webworkr.js');
workerObj.postMessage("Start Worker");
workerObj.onmessage=(e)=>{
    document.getElementById("head-2").innerHTML=e.data
}




    
}