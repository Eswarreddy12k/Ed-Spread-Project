
let reset=document.getElementById('res')
reset.onclick=()=>{
    document.getElementsByClassName('num')[0].innerHTML=0
}
let inc=document.getElementById('inc')
inc.onclick=()=>{
    let sum=document.getElementsByClassName('num')[0].innerHTML
    document.getElementsByClassName('num')[0].innerHTML=parseInt(sum)+1
}
let dec=document.getElementById('dec')
dec.onclick=()=>{
    let sumd=document.getElementsByClassName('num')[0].innerHTML
    document.getElementsByClassName('num')[0].innerHTML=parseInt(sumd)-1
}
let def=document.getElementById('def')
def.onclick=()=>{
    document.getElementById('def').style.display='none'
    document.getElementsByClassName('enter')[0].style.display='flex'
    let def1=document.getElementById('def1')
    def1.onclick=()=>{
    let x=document.getElementById('defau').value;
    if(parseInt(x)){
        document.getElementsByClassName('num')[0].innerHTML=x;
        document.getElementById('def').style.display='flex'
        document.getElementsByClassName('enter')[0].style.display='none'
    }
    else{
        alert('Enter Valid Number')
    }

    }

}
