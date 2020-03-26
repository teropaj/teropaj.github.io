function value () {
    return Math.floor(Math.random()*9+2)
}
 

let tulo,b,c
 

 

function next () {
    b=value();c=value()
     
    a=b+`*`+ c  
    document.getElementById('kys').innerHTML=a

}
function vastaus () {
    tulo=b*c+""
    document.getElementById('kys').innerHTML=b+`*`+ c+ ' = '+tulo
}
next()
document.getElementById('kys').innerHTML=a

 
