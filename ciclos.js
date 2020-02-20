let s=1,y=2,fac=1,c=0,d=y;
    for(let i=1;i<=4;i++){
        c=Math.pow(y,i);
        y=c
        fac*=i;
        s+=y/fac;
        y=d
    }
console.log(s);


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
