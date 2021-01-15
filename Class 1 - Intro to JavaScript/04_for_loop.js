for (let index = 1; index <= 10; index++) {
   //console.log(index);
   if(index >= 5){
       break;
   } else if(index < 5) {
       continue;
   }
   console.log(`Index is ${index}`);
}

let x = 3;

switch(x) {
    case 3:
        console.log('three');
        
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}