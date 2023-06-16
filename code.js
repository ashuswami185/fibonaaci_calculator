// write down a code print n fibonaacci number 



function fibonaacci_calculator(n){
var output = [0,1];
 for( var i= 2; i<n; i++){
    output.push(output[i-2]+ output[i-1]);
     




     
 }
     console.log(output);
    
    
    

    
    
}
 var n = prompt(" how many fibonaaci number you wanted to print ?");
fibonaacci_calculator(n);
