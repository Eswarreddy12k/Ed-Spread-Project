let numr=[];
let ch=['(',')','7','8','9','X','4','5','6','-','1','2','3','+','.','0','/'];

for(let i=0;i<17;i++){
    numr[i]=document.getElementById('num'+ch[i])
}
let tex=document.getElementById('inpbox')
numr[0].onclick=()=>{
    
    tex.innerHTML=tex.innerHTML+ch[0];
    
    console.log('aaa')
}
numr[1].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[1];
}
numr[2].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[2];
}
numr[3].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[3];
}
numr[4].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[4];
}
numr[5].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[5];
}
numr[6].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[6];
}
numr[7].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[7];
}
numr[8].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[8];
}
numr[9].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[9];
}
numr[10].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[10];
}
numr[11].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[11];
}
numr[12].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[12];
}
numr[13].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[13];
}
numr[14].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[14];
}
numr[15].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[15];
}
numr[16].onclick=()=>{
    tex.innerHTML=tex.innerHTML+ch[16];
}
let numac=document.getElementById('numAC')
numac.onclick=()=>{
    tex.innerHTML="";
}
let numdel=document.getElementById('numDEL')
numdel.onclick=()=>{
    tex.innerHTML=tex.innerHTML.substring(0,tex.innerHTML.length-1)
}
let calc=document.getElementById('num=')
calc.onclick=()=>{
    let x=tex.innerHTML
    x=x.replace('X','*')
    try{
        console.log(x)
        let ans=eval(x)
        tex.innerHTML=ans
    }
    catch(error){
        alert('Invalid Expression')
    }
    
}
