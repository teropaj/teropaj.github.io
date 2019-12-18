 
koodit=HEL.split('*')
input =document.querySelector('input')
input.addEventListener('input', updateValue);


console.log('was here')

function updateValue (e) {console.log('was here');
    console.log('was here')
    let sopivat = "" 
    let haettu=e.target.value.toUpperCase()
    console.log(haettu)
    if (haettu.length>1){
            for(b in koodit){//console.log(koodit[b])
                    if (koodit[b].toUpperCase().search(haettu)>-1) {
                        sopivat='<h1>'+sopivat+koodit[b]+'</ha>'+'<br>'
                    }
                } 
                console.log(sopivat)
                alueet.innerHTML=sopivat
        }
    }

painoit = () => {console.log('jee')}

// function updateValue(e) {
//     log.textContent = e.target.value;
//   }
function teeValit() {b="";for (i in HEL) {
    vertaa=HEL[i].toUpperCase()===HEL[i]
    if (vertaa) {b=b+' '+HEL[i]} else {b=b+HEL[i]}}
    console.log(b)}

//jflsjfl