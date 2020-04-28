let listDiv=document.createElement('div')
for (let i=0;i<data.length;i++){
    div=document.createElement('div')
    div.classList.add('divClass')
     
    a=document.createElement('a')
    a.innerHTML=data[i][1]
    h1=document.createElement('h1')
    h1.innerHTML=data[i][0]
    a.href=data[i][2]
    a.appendChild(h1)
    div.appendChild(a)
    document.body.appendChild(div)



}