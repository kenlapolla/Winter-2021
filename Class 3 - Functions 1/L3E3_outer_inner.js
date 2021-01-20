
function outer(){
    let a = "Outer a";
    let b = {name: "Outer Object B"};
    console.log(a,b);
    
    function inner(a,b) {
      a = "Inside A";
      b = {name:"Inner Object A"};
      console.log(a,b);
    }
   
     inner(a, b);
     console.log(a,b);
   }
   
   outer();