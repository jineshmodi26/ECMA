function fun1(data,callback){
    setTimeout(()=>{
    console.log("Fun1 -> ");
    callback(data);
    },3000);
   }
   function fun2(data,callback){
    setTimeout(()=>{
    console.log("Fun2 -> ");
    callback(data);
    },2000);
   }
   function fun3(data,callback){
    setTimeout(()=>{
    console.log("Fun3 -> ");
    callback(data); 
    },1000);
   }
   fun1("admin",callfun1=>{ 
    fun2(callfun1,callfun2=>{
    fun3(callfun2,callfun3=>{
    console.log(callfun3);
    });
    });
   });