function run1(){
    var i1=0; //ES5
    let zar3=2;
    console.log(i);
    {
    var i=2; //ES5
    let zar1="Zar";
    function run2(){
    var i2=1; //ES5
    let zar2="Zar";
    console.log(zar2);
    }
    console.log(i2); // undefine
    console.log(zar2); //Reference Error 
    console.log(zar1);
    console.log(zar3);
    }
    console.log(zar1); //Reference Error 
    console.log(i); // 0
    console.log(zar); //Reference Error
   }
   run1();
   var func=[];
   for(let i=0;i<3;i++){
    func[i]=function(){
    console.log("Value of i:"+i);
    };
   }
   for(let j=0;j<3;j++){
    func[j]();
   }