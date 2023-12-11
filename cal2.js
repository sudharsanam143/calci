let a=document.getElementById("calculator");
let b=document.getElementById("result");
let d=document.getElementById("r1");
let c=1,count=0;
let op,n1=0,n2=0,result=0;
console.log(n1+" "+n2);
a.addEventListener("click",hello);
b.innerHTML="";
d.innerHTML="";
function hello(){
    let ch=(event.target).innerText;
   // console.log(event);
    if(ch=='c'){
        b.innerHTML="";
        d.innerHTML="";
        n1=0,n2=0,result=0;
        count=0,c=1;
    }
    else if(ch=='+' || ch=='-' || ch=='x' || ch=='%' || ch=='/'|| ch=='='){
       
        if(c==1 && count==1) {
            c=0;count=0;

            
            if(n1!=0 && n2!=0){
                console.log(n1+" "+n2)
                count=0;
            switch(op){
              case '+':
               result=n1+n2;
               n1=result;c=0;
               d.innerHTML=result;
               console.log(result);
               break;
             case '-':
              result=n1-n2;
              n1=result;c=0;
              d.innerHTML=result;
              console.log(result);
              break;
            case 'x':
              result=n1*n2;
              n1=result;c=0;
              d.innerHTML=result;
              console.log(result);
              break;
            case '/':
             result=n1/n2;
             n1=result;c=0;
             d.innerHTML=result;
             console.log(result);
             break;
            case '%':
             result=n1%n2;
             n1=result;c=0;
             d.innerHTML=result;
             console.log(result);
             break;
            }
            }
        }
       
        if(c!=1 && ch!='=' && count==0){
            n1=(result==0)?n2:result;
            n2=0;
            b.innerHTML+=ch;
            //let v=b;
            c=1;
            op=ch;
        }
       
    }
    else if(ch.length===1){
      b.innerHTML+=ch;
      n2=n2*10+parseInt(ch);
      //console.log(n2);
      count=1;
     // c=0;
    }
   
}