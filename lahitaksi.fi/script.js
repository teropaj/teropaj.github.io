 
//raakaAlueet=hel+helAlueet
//koodit=la2(raakaAlueet)//+la2(helAlueet)
koodit=tahdita(hel)+tahdita(van)+tahdita(esp)+tahdita(helAlueet)
koodit=koodit.split('*')
input =document.querySelector('input')
input.addEventListener('input', updateValue);
tolppaArr=[]


 

function updateValue (e) { 
     
    let sopivat = "" 
    let haettu=e.target.value.toUpperCase()
    //console.log(haettu)
    //if (haettu.length>1){
            for(b in koodit){//console.log(koodit[b])
                    if (koodit[b].toUpperCase().search(haettu)>-1) {
                        sopivat='<h1>'+sopivat+koodit[b]+'</ha>'+'<br>'
                    }
                } 
                 
                alueet.innerHTML=sopivat
      //  }
    }

painoit = () => {console.log('jee')}

// function updateValue(e) {
//     log.textContent = e.target.value;
//   }
function teeValit() {b="";for (i in HEL) {
    vertaa=HEL[i].toUpperCase()===HEL[i]
    if (vertaa) {b=b+' '+HEL[i]} else {b=b+HEL[i]}}
    console.log(b)}

function tolpat () {
    let lista='<h1>'
    for (tolppa in helTolpatArr) {
        lista+=helTolpatArr[tolppa]+'<br>'
    }
    lista+='<br>'
    
    document.getElementById("alueet").innerHTML=lista
}

function isNumber(char) {
    if (char==" ") return false
    return !isNaN(char * 1)}

function tahtiValiin (strings) {

     

    let output="",i=0,numerot=''
     
    while (i <= strings.length){
        character = strings.charAt(i);
        if (character==" ") output+=" "
        else {
            if (isNumber(character)){
                //console.log('i ',i)
                if(!isNumber(strings.charAt(i+1))) {let helper= 'joo'+'!!'+character
                //console.log(helper,i)
                 
                //helper+=strings.charAt(i+1);
                //debugger
                //console.log(helper)
                output+=helper
                //i++
                //if (output[0]=="4") debugger
                //console.log(output)
            }
                //character is numeric');
                // if (isNaN(strings.charAt(i+1)*1)) {
                //     output+= +character
                     
                // }
                else {output+=character}

            }else{
                console.log('ei ollu numero ')
                output+=character
                if (output[0]=="4") debugger
                //console.log('output ',output)
            }
        }
        if (isNumber(character) && !isNumber(strings.charAt(i+1))) output+=" "
        //console.log('i ',i,'output ',output)
        i++;
        console.log('i ',i,'output ',output)
        //if (output[0]=="4") debugger
    }
    return output
}

function listaaArray (arr) {
   let  output = [],tolpp=""
   for (i=1 ;i<arr.length;i++) {
       let helper=arr[i-1]
    if (isNumber(helper) && i>2)  {//console.log('number is true')
        //tolpp+=helper+" "
        output.push(tolpp+helper);
        tolpp+=helper+" "
        tolpp=''
    }
    else {tolpp+=helper}
    

   }
   output.push(tolpp)
   return output
}
function la2 (arr) {
    let i=0,output=[],helper=''
    while (i<arr.length){
        merkki=arr[i]
         if (i==1 && helper.length==0) debugger
        //helper+=arr[i]
        if(i>2 && isNumber(merkki)==true) {
            //console.log('numero');debugger
            if (helper.length>2)
                { //console.log(helper)
                    //if (i==1 && helper.length==0) debugger
                    //console.log('push helper ',helper)
                    output.push(helper);
                    helper=''
                }
             
            //helper=merkki
            //console.log('i ',i, ' helper ',helper,'merkki ',merkki)
        }
        //console.log('i ',i)
        helper+=merkki
        
        //console.log(helper)
        if (isNumber(merkki) &&!isNumber(arr[i+1])) {
            //console.log(helper)
            helper+=" ";
            //console.log('helper ',helper)
        }
        //console.log('helper kierros ',helper)
        i++
        //console.log(arr.length)
    }
    output.push(helper)
    return output
}
function tahdita (kki) {
    let newKki =''
    for (letter=0;letter<kki.length;letter++) {
        if (!isNumber(kki[letter]) && isNumber(kki[letter-1])) {
            newKki+=' ' 
        }
        if (isNumber(kki[letter]) && !isNumber(kki[letter-1])) {
            newKki+='*'+kki[letter]
        }
        else {newKki+=kki[letter]}
         
    }
    return newKki
}

//jflsjfl