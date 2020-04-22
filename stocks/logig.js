salkkuobjekti ={
    
    
  //aktiivinen=0  laitetaan myöhemmin
  kerro : function () {console.log('Aktiivinen salkku ',this.e)},

  aktivoi: function (e) {
      this.e=e
      console.log(this.e)
      document.getElementById('salkku'+this.aktiivinen).style.display="none"
      salkkuNo=e.target.id
      document.getElementById(salkkuNo).style.backgroundColor='blue'
      document.getElementById(this.aktiivinen).style.backgroundColor='yellow'
      this.aktiivinen=salkkuNo
      document.getElementById('salkku'+salkkuNo).style.display='block'
      e.target.style.backgroundColor='blue'
      //this.aktiivinen=
      debugger
       
  },
  passivoiSalkut: function () {
    console.log('was here')
    let a=document.querySelectorAll('#salkut')[0].children
    for (let i=0;i<a.length-1;i++) {
      //a[0].children[i].style.backgroundColor="yellow"

      
      // a[i].setAttribute('style','backgroundColor="yellow"')
      a[i].style.backgroundColor='yellow'
    }
  }



}

//document.getElementById('idForm').addEventListener('submit',transaktio)
// document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('lisaaButton').addEventListener('click',transaktio)
let idLista=document.getElementById('list')
let idOsakelista=document.getElementById('osakelista')
idOsakelista.style.padding="2%"
let idLisaaOsake=document.getElementById('idLisaaOsake')
let osakeTitle=document.getElementById('osakeTitle')
let maara=document.getElementById('maara')

let ostohinta=document.getElementById('ostohinta')
let ostoaika=document.getElementById('ostoaika')
let kurssi=document.getElementById('kurssi')
let lisaaH1=document.getElementById('lisaaH1')
let idOsake=document.getElementById('idOsake')
const nuoliAlas="⇓"
const nuoliYlos="⇑"
document.getElementById('osta').addEventListener('click',ostaf)

idLisaaSalkkuRef=document.getElementById('idLisaaSalkku')
//idLisaaSalkku.addEventListener('click',()=>{console.log(this);idLisaaSalkku.style.display="block"})
lisaaSalkkuFormRef=document.getElementById('idFormLisaaSalkku')
lisaaSalkkuFormRef.addEventListener('submit',lisaaSalkkuFormAction)
 
 
let tdChild7


//idLista.addEventListener('click',listHandler)
//idTable=document.getElementById('idTable')
//idTable.addEventListener("click",taulukkoClick)
let salkut, salkkuDiv  //taulukko, helppo display='none'


if(localStorage.length===0){ 
  localStorage.setItem('salkut',JSON.stringify([{salkku:true}]))
}
 salkut=JSON.parse(localStorage.salkut)
 
salkkuTht=[ '','osake','määrä','ostokurssi',
//'ostoaika',
'kurssi','+/-','']

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = getDate()

//hakee salkut
for (let i=0;i<salkut.length;i++) {
  let salkku=salkut[i]
  let salkkuObject=document.createElement('p')
  salkkuObject.addEventListener('click',(e)=>salkkuobjekti.aktivoi(e))
  //debugger
  salkkuObject.innerHTML=Object.keys(salkut[i])[0]
  aktiivinenSalkku=salkut[i][salkkuObject.innerHTML]
  if(aktiivinenSalkku) { salkkuObject.style.backgroundColor='green'
    salkkuobjekti.aktiivinen=i }
   
  salkkuObject.style.color=(aktiivinenSalkku) ? 'white;' :'#f1f1f1'
  //salkkuObject.style.backgroundColor='blue'
  salkkuObject.style.marginRight='1em'
  salkkuObject.style.fontSize='1em'
  salkkuObject.id=i+''
  //debugger
  let width=salkku.length + 'em'
  //debugger
  salkkuObject.style.width='20%'
  salkkuObject.style.textAlign="center"
  salkkuObject.setAttribute('salkkuNo',i)
  salkkuObject.onclick="aktivoiSalkku()"
  //debugger
  document.getElementById('salkut').appendChild(salkkuObject)

  salkkuDiv=document.createElement('div')
  salkkuDiv.id="salkku"+i
  
  let h1=document.createElement('h1')
  h1.innerHTML=Object.keys(salkku)
  
  h1.style.textAlign='center'
  h1.style.width='12em'
  h1.style.margin='auto'
  //h1.style.backgroundColor='green'
  h1.style.marginBottom='0px'
  //h1.style.border="1px solid black"
  h1.style.backgroundColor='green'

  salkkuDiv.appendChild(h1)
  //debugger

  let salkkuTable=document.createElement('table')
  //if (window.innerWidth>670) {
  //salkkuTable.style.width='70%'
 //}

  salkkuTable.style.margin='auto'
  salkkuTable.id='idTable'
  
  
  for (let i of salkkuTht) {
  let osake=document.createElement('th')
  osake.innerHTML=i
  salkkuTable.appendChild(osake)
  }

   

  salkkuDiv.appendChild(salkkuTable)
  lisaaButton=document.createElement('button')
  lisaaButton.innerHTML='lisää osake'
  lisaaButton.addEventListener('click',lisaaOsake)

//<button onclick="lisaaOsake()" id="idLisaaOsake">Lisää</button>


  salkkuDiv.appendChild(lisaaButton)
  salkkuDiv.style.display=(aktiivinenSalkku) ? "block":"none"

  if (aktivoiSalkku===true) salkkuolio.aktivoi(i)

  idOsakelista.appendChild(salkkuDiv)


}
salkkuLista=document.querySelector('#salkut')
let lisaaSalkutLinkki=document.createElement('p')
lisaaSalkutLinkki.innerHTML="Lisää salkku"
salkkuLista.appendChild(lisaaSalkutLinkki)
lisaaSalkutLinkki.addEventListener('click',lisaaSalkkuf)
idTable=document.getElementById('idTable')
idTable.addEventListener("click",taulukkoClick)
// bodyid=document.querySelector('body')
// bodyid.addEventListener('click',(e)=>{console.log(e);debugger})
 
 

  //listaa osakkeet

  if (localStorage.length>0) {
    //let osakkeet=JSON.parse(localStorage)

    for (osake in Object.keys(localStorage)){
      //let helper=JSON.parse(localStorage.getItem(osake))
      
      let helper=Object.keys(localStorage)[osake]
      if(helper==="salkut" || helper==="aktiivinenSalkku") {console.log('oli salkut');continue}
      //debugger

      let rivi=JSON.parse(localStorage.getItem(helper))

      let maaraYhteensa=0
      let ostoYhteensa=0

      let ostotArray = []
      let ostotTr = []

      idListaChild=document.createElement('tr')
      idTable.appendChild(idListaChild) 
      
      for (let i of rivi) {
        let ostoRivi=document.createElement('tr')
        ostoRivi.classList.add('hide')
        ostoRivi.setAttribute('company',helper)
        for (let j in salkkuTht) {console.log(i)
          let th=document.createElement('td')
           
          switch(Number(j)){
            case 0: th.innerHTML="";break
            case 1: th.innerHTML=helper;break
            case 2: th.innerHTML=i["maara"];break
            case 3: th.innerHTML=i["ostohinta"]; 
            break
             
          default: th.innerHTML=""
          }







          
          ostoRivi.appendChild(th)
          ostotTr.push(ostoRivi)
          idTable.appendChild(ostoRivi)
        }

        let maara=0

        ostoYhteensa+=Number(i.maara)*Number(i.ostohinta)
        maaraYhteensa+=Number(i.maara)
        console.log(`Ostot yhteensä ${ostoYhteensa} maaraYhteensa ${maaraYhteensa}`
        )
      }

        let keskimaarainenKurssi
        keskimaarainenKurssi=ostoYhteensa/maaraYhteensa



      //debugger
      console.log(localStorage.getItem(helper))
      //idListaChild=document.createElement('tr')
       
      // let ostotArray = []
      // for (let i=0;i<5>i++){ 
      //   let elem=document.createElement('p')
      //   elem.textContent="joo"
      //   ostotArray.push() 
      // }


      plusMiinus=document.createElement('td')
      tdChild1=document.createElement('td')
      tdChild2=document.createElement('td')
      tdChild3=document.createElement('td')
      //tdChild4=document.createElement('td')
      tdChild5=document.createElement('td')
      tdChild6=document.createElement('td')
      tdChild7=document.createElement('td')
      //debugger
      plusMiinus.innerHTML='+/-'
      tdChild1.innerHTML=helper
      tdChild2.innerHTML=maaraYhteensa
      tdChild3.innerHTML=keskimaarainenKurssi.toFixed(2)
      //tdChild4.innerHTML=rivi[2].ostoaika
      tdChild5.innerHTML=Number(rivi[rivi.length-1].kurssi).toFixed(2)
      let voitto= 
                  maaraYhteensa*rivi[rivi.length-1].kurssi -//.toFixed(2)
                  ostoYhteensa
                  tdChild6.style.backgroundColor= (voitto>0) ? 'green' : 'red' 
                  //debugger
                  tdChild6.innerHTML=voitto.toFixed(2)+""
                   

      //debugger
      //tdChild7.style.font-size="0.7em"
      tdChild7.innerHTML=(rivi.length>1) ? nuoliAlas : ""
      tdChild7.style.fontSize="0.5em"
      tdChild7.style.width="3em"
      tdChild7.style.textAlign="center"
       
      


      idListaChild.appendChild(plusMiinus)             
      idListaChild.appendChild(tdChild1)
      idListaChild.appendChild(tdChild2)
      idListaChild.appendChild(tdChild3)
      //dListaChild.appendChild(tdChild4)
      idListaChild.appendChild(tdChild5)
      idListaChild.appendChild(tdChild6)
      idListaChild.appendChild(tdChild7)


      //idTable.appendChild(idListaChild)  //tr
      //idTable.idTable.querySelectorAll('tr')[1]
      //a=idTable.querySelectorAll('tr')[3]

      console.log(ostotTr)

      //debugger
      //idListaChild1.textContent=helper
      //debugger
      //document.createElement('')
      //idLista.appendChild(idListaChild)
      //debugger
    }
    //idLista.innerHTML=localStorage


  }

  function listHandler(e) {
    console.log(e)
  }

  function taulukkoClick (e){
    //console.log(e.target.innerHTML)
    //idOsakelista.style.display='none'
    console.log('painettu ',e.target.innerHTML)
    let pressedButton=e.target.parentElement.cells[1].innerText
    let kaupat=document.querySelectorAll(`[company=${pressedButton}]`)
    console.log(pressedButton)
    switch (e.target.innerText) {
       case 'edit': console.log('oli edit');
       //console.log(idLisaaOsake.style.display)
        
        
        
        console.log('display ',document.getElementById('idLisaa').style.display)
        document.getElementById('idLisaa').style.display="block"
        //debugger
        //debugger
        let rivi=Object.keys(localStorage)[e.target.parentElement.cells[0].innerHTML]
        //debugger
        edit(e.target.parentElement.cells[1].innerHTML)
      break
      case nuoliAlas: console.log('kaupat'); downAup (e.target);break
      case nuoliYlos: console.log('kaupat'); downAup (e.target);break
          
          
         //[0].classList.remove('hide')
         
          
         
          
       
      case '+/-': console.log('+/-')
      //idLisaaOsake.style.display='none'
      document.getElementById('lisaaButton').style.display="none"
      idLisaaOsake.style.display="block"
      document.getElementById('osta').style.display="inline-block"
      document.getElementById('myy').style.display="inline-block"
      //idLisaaOsake.style.display="block"
      let valittuOsake=e.target.parentElement.cells[1].innerHTML
      osakeTitle.style.display="none"
      lisaaH1.innerHTML=valittuOsake
      lisaaH1.style.display="block"
      edit(e.target.parentElement.cells[1].innerHTML)
      ;break
    }
    function downAup (e) {
      if (kaupat[0].classList.length===0) { kaupat.forEach(e=>e.classList.add('hide'))
       e.innerHTML=nuoliAlas
      }
      else {
      kaupat.forEach(e=>e.classList.remove('hide')) 
      e.innerHTML= nuoliYlos
      }
    }
    //debugger
    //console.log(e.target.innerHTML)
  }

  function lisaaOsake() {
    document.getElementById('osta').style.display="none"
    document.getElementById('myy').style.display="none"
    idOsakelista.style.display="block"
    salkkuDiv.style.display="none"      
    document.getElementById('idLisaaOsake').style.display="block"
  }

  function closeAdd () {
    document.getElementById('idLisaaOsake').style.display="none"
    salkkuDiv.style="block"
    idOsakelista.style.display="block"
  }



  function edit (osake) {
    
    document.querySelectorAll('button')[1].style.display="block"
    salkkuDiv.style.display="none"
     
    //debugger
    //let b=JSON.parse(e)
    //debugger
    //debugger
    let b=JSON.parse(localStorage.getItem(osake))
   // debugger
    document.getElementsByTagName('input')[0].value=osake
    // document.getElementsByTagName('input')[1].value=b[0].maara
    // document.getElementsByTagName('input')[2].value=b[1].ostohinta
    // document.getElementsByTagName('input')[3].value=b[2].ostoaika
    // document.getElementsByTagName('input')[4].value=b[3].kurssi
    //document.getElementsByTagName('input')[5].value='-200'

  }
  function aktivoiSalkku () {console.log('joo')}

  function getDate () {
    d=new Date()
    paiva= d.getDate()+""
    if (paiva.length===1) {paiva="0"+paiva}
    kk=d.getMonth()+""
    if (kk.length===1) {kk="0"+kk}
    vuosi=d.getFullYear()
    return  vuosi+'-'+
      kk+'-'+
      paiva
  }

  function lisaaSalkkuf () {
    idOsakelista.style.display="none"
    idLisaaSalkku.style.display="block"
     
  }
  function transaktio(event) {
    event.preventDefault()
      //alert("The form was submitted  ");
      //Osake
      console.log(event)
       let osake= []
       let helper ={}
       helper.maara=maara.value
          helper.ostohinta=ostohinta.value
 
          helper.ostoaika=ostoaika.value
          helper.kurssi=kurssi.value
      osake.push(helper)
      // debugger

      tallenna (idOsake.value,osake)
      // localStorage.setItem(
      //     event.target[0].value,
      //     JSON.stringify(helper)
      // )
      //document.getElementById('lisaa').style.display="none"
      //e.preventDefault();
      window.location.reload()
    }

    function tallenna (event, helper) {

      localStorage.setItem(
        event,
        JSON.stringify(helper)
    )



    }
  function ostaf () { 

    let storageOsake=JSON.parse(localStorage.getItem(lisaaH1.innerHTML))
    let helper = {}
     
      
      //Määärä
      helper.maara=maara.value
      //Ostohinta
      helper.ostohinta=ostohinta.value
      //Ostoaika
      helper.ostoaika=ostoaika.value
      //Kurssi
      helper.kurssi=kurssi.value
    
    //taulukko.push(helper)
    storageOsake.push(helper)
     
    localStorage.setItem(
      lisaaH1.innerHTML,
      JSON.stringify(storageOsake)
  )
      console.log('pöö')
      closeAdd ()
  }
  function annaTdt () {
    a=document.querySelectorAll('td')
    a.forEach((a,b)=>console.log(a,a.innerHTML,b));debugger
  }
  function testi () {console.log('toimii')}

  function lisaaSalkkuFormAction (e) {
    let b={}
    b[e.target[0].value]=false
    salkut.push(b)
    localStorage.salkut=JSON.stringify(salkut)
     

  }
  function idLisaaSalkkuClose() {
    console.log('was here');
    //debugger
    idLisaaSalkkuRef.style.display="none"
    idOsakelista.style.display="blocklisaaSalkkuFormAction"}

// })

   