let s=1,y=2,fac=1,sum=0;
    for(let i=1;i<=3;i++){
        y=Math.pow(y,i);
        fac*=i;
        s+=y/fac; 
        y=2;
    }
console.log(s);


console.log(exp(4));
function exp(c){
    var suma=1,fac=1;
    for(i=1;i<=c;i++)
    {
        fac*=i;
        suma+=1/fac;
    
    }
    return suma;
}
