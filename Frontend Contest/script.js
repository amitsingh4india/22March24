let value=0
let count=document.getElementById('count')
count.textContent=`Yoor Current Count is : ${value}`

function inc(){
    count+=1
}
inc()
function dec(){
    count-=1
}
dec()
function clear(){
    count=0
}
clear()

let dec1=document.getElementById('dec')
dec1.addEventListener('click',dec())
console.log(value)