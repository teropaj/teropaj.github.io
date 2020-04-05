 

document.getElementById('idForm').addEventListener('submit',myFunction)
let idLista=document.getElementById('list')
//idLista.addEventListener('click',listHandler)
//idTable=document.getElementById('idTable')
//idTable.addEventListener("click",taulukkoClick)
let salkut, 
salkkuDiv  //taulukko, helppo display='none'
if(localStorage.length===0){ 
  localStorage.setItem('salkut',JSON.stringify(['salkku']))
}
 salkut=JSON.parse(localStorage.salkut)
salkkuTht=['osake','määrä','ostohinta',
//'ostoaika',
'kurssi','+/-','']

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = getDate()

//hakee salkut
for (let i=0;i<salkut.length;i++) {
  let salkku=salkut[i]
  let salkkuObject=document.createElement('p')
  salkkuObject.innerHTML=salkut[i]
  salkkuObject.style.backgroundColor='blue'
  salkkuObject.style.marginRight='1em'
  salkkuObject.style.fontSize='1em'
  //debugger
  let width=salkku.length + 'em'
  //debugger
  salkkuObject.style.width='20%'
  salkkuObject.style.textAlign="center"
  console.log(`${salkku.length} em`)
  salkkuObject.onclick="aktivoiSalkku()"
  //debugger
  document.getElementById('salkut').appendChild(salkkuObject)

  salkkuDiv=document.createElement('div')
  let h1=document.createElement('h1')
  h1.innerHTML=salkut[i]
  h1.style.textAlign='center'
  //h1.style.backgroundColor='green'
  h1.style.marginBottom='0px'
  h1.style.border="1px solid black"
  salkkuDiv.appendChild(h1)
  //debugger

  let salkkuTable=document.createElement('table')
  salkkuTable.style.width='70%'
  salkkuTable.style.margin='auto'
  salkkuTable.id='idTable'
  
  
  for (let i of salkkuTht) {
  let osake=document.createElement('th')
  osake.innerHTML=i
  salkkuTable.appendChild(osake)
  }

   

  salkkuDiv.appendChild(salkkuTable)
  document.body.appendChild(salkkuDiv)


}
idTable=document.getElementById('idTable')
idTable.addEventListener("click",taulukkoClick)
// bodyid=document.querySelector('body')
// bodyid.addEventListener('click',(e)=>{console.log(e);debugger})

function myFunction(event) {
  event.preventDefault()
    //alert("The form was submitted  ");
    //Osake
    console.log(event)
     
    let helper=[
    
      //Määärä
      {maara:event.target[1].value},
      //Ostohinta
      {ostohinta:event.target[2].value},
      //Ostoaika
      {ostoaika:event.target[3].value},
      //Kurssi
      {kurssi:event.target[4].value}
    ]
    // debugger
    localStorage.setItem(
    event.target[0].value,JSON.stringify(helper))
    document.getElementById('idLisaa').style.display="none"
    //e.preventDefault();
  }

  //listaa osakkeet

  if (localStorage.length>0) {
    //let osakkeet=JSON.parse(localStorage)

    for (osake in Object.keys(localStorage)){
      //let helper=JSON.parse(localStorage.getItem(osake))
      
      let helper=Object.keys(localStorage)[osake]
      if(helper==="salkut" || helper==="aktiivinenSalkku") {console.log('oli salkut');continue}
      //debugger

      let rivi=JSON.parse(localStorage.getItem(helper))
      //debugger
      console.log(localStorage.getItem(helper))
      idListaChild=document.createElement('tr')
      tdChild1=document.createElement('td')
      tdChild2=document.createElement('td')
      tdChild3=document.createElement('td')
      //tdChild4=document.createElement('td')
      tdChild5=document.createElement('td')
      tdChild6=document.createElement('td')
      tdChild7=document.createElement('td')
      //debugger
      tdChild1.innerHTML=helper
      tdChild2.innerHTML=rivi[0].maara
      tdChild3.innerHTML=rivi[1].ostohinta
      //tdChild4.innerHTML=rivi[2].ostoaika
      tdChild5.innerHTML=rivi[3].kurssi
      let voitto=((rivi[0].maara*rivi[3].kurssi) -
                  (rivi[0].maara*rivi[1].ostohinta)).toFixed(2)
      
                  tdChild6.style.backgroundColor= (voitto>0) ? 'green' : 'red' 
                  //debugger
                  tdChild6.innerHTML=voitto+""
                   

      //debugger
      tdChild7.innerHTML="edit"
      


             
      idListaChild.appendChild(tdChild1)
      idListaChild.appendChild(tdChild2)
      idListaChild.appendChild(tdChild3)
      //dListaChild.appendChild(tdChild4)
      idListaChild.appendChild(tdChild5)
      idListaChild.appendChild(tdChild6)
      idListaChild.appendChild(tdChild7)


      idTable.appendChild(idListaChild)
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
    
    console.log(e.target.parentElement.cells[0].innerHTML)
    if (e.target.innerHTML==='edit') {console.log('oli e');
    //debugger
    console.log('display ',document.getElementById('idLisaa').style.display)
    document.getElementById('idLisaa').style.display="block"
    //debugger
    //debugger
    let rivi=Object.keys(localStorage)[e.target.parentElement.cells[0].innerHTML]
    //debugger
    edit(e.target.parentElement.cells[0].innerHTML)}
    //debugger
    console.log(e.target.innerHTML)
  }

  function lisaaOsake() {
    document.getElementById('idLisaa').style.display="block"
  }

  function closeAdd () {
    document.getElementById('idLisaa').style.display="none"
  }

  function edit (osake) {
    document.querySelectorAll('button')[1].style.display="block"
    salkkuDiv.display="none"
     
    //debugger
    //let b=JSON.parse(e)
    //debugger
    //debugger
    let b=JSON.parse(localStorage.getItem(osake))
    debugger
    document.getElementsByTagName('input')[0].value=osake
    document.getElementsByTagName('input')[1].value=b[0].maara
    document.getElementsByTagName('input')[2].value=b[1].ostohinta
    document.getElementsByTagName('input')[3].value=b[2].ostoaika
    document.getElementsByTagName('input')[4].value=b[3].kurssi
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

  function lisaaSalkku() {
    document.getElementById('idTable').style.display='none'
  }


  // if (localStorage.length>0)  { 
  //   for (let oosake=0;oosake<localStorage.length-1;oosake++)
  //    {
  //     let helper=document.createElement(idLista,'p')
  //     helper.innerHTML=Object.keys(localStorage[osake])

  //   }


  // }
   