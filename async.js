function syncfunction(waitTime){
    setTimeout(()=>{
        console.log("After"+waitTime+"secondbeacuseofSync");
    },waitTime);}
console.log("Started");syncfunction(5000);console.log("Ended");