// without function
let num = 7;
let count=0;
if(num%7==0){
    console.log("7-ye bolunur.");
}

else{
   for( let i=0; i<num;i++){
    
       if(num%7!=0){

        if((num%7)>3){
            num++;
        }
        else{
            num--;
        }
       }
}

console.log(num)
  
}