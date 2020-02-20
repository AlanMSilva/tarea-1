let s=0,y=1,fac=1,c=0;
    for(let i=1;i<=3;i++){
        y=Math.pow(y,i);
        fac*=i;
        s+=y/fac;
    }
console.log(s+1);


console.log(exp(3));
function exp(c){
    var x=1,fac=1,y=1;
    for(i=1;i<=c;i++)
    {
        y*=i;
        x+=1/y
        fac++;
    }
    return x;
}
