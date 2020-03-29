 

document.getElementById('idForm').addEventListener('submit',myFunction)
let idLista=document.getElementById('list')
//idLista.addEventListener('click',listHandler)
idTable=document.getElementById('idTable')
idTable.addEventListener("click",taulukkoClick)

function myFunction(e) {
    //alert("The form was submitted  ");
    //Osake
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
    //debugger
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
      //debugger

      let rivi=JSON.parse(localStorage.getItem(helper))
      //debugger
      console.log(localStorage.getItem(helper))
      idListaChild=document.createElement('tr')
      tdChild1=document.createElement('td')
      tdChild2=document.createElement('td')
      tdChild3=document.createElement('td')
      tdChild4=document.createElement('td')
      tdChild5=document.createElement('td')
      tdChild6=document.createElement('td')
      tdChild7=document.createElement('td')
      //debugger
      tdChild1.innerHTML=helper
      tdChild2.innerHTML=rivi[0].maara
      tdChild3.innerHTML=rivi[1].ostohinta
      tdChild4.innerHTML=rivi[2].ostoaika
      tdChild5.innerHTML=rivi[3].kurssi
      let voitto=((rivi[0].maara*rivi[3].kurssi) -
                  (rivi[0].maara*rivi[1].ostohinta)).toFixed(2)
      
                  tdChild6.style.backgroundColor= (voitto>0) ? 'green' : 'red' 
                  //debugger
                  tdChild6.innerHTML=voitto+""
                   

      //debugger
      tdChild7.innerHTML="e"
      


             
      idListaChild.appendChild(tdChild1)
      idListaChild.appendChild(tdChild2)
      idListaChild.appendChild(tdChild3)
      idListaChild.appendChild(tdChild4)
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
    if (e.target.innerHTML==='e') {console.log('oli e');
    //debugger
    console.log('display ',document.getElementById('idLisaa').style.display)
    document.getElementById('idLisaa').style.display="block"
    //debugger
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
     
    //debugger
    //let b=JSON.parse(e)
    //debugger
    //debugger
    document.getElementsByTagName('input')[0].value=osake
    document.getElementsByTagName('input')[1].value=b[0].maara
    document.getElementsByTagName('input')[2].value=b[1].ostohinta
    document.getElementsByTagName('input')[3].value=b[2].ostoaika
    document.getElementsByTagName('input')[4].value=b[3].kurssi
    //document.getElementsByTagName('input')[5].value='-200'

  }


  // if (localStorage.length>0)  { 
  //   for (let oosake=0;oosake<localStorage.length-1;oosake++)
  //    {
  //     let helper=document.createElement(idLista,'p')
  //     helper.innerHTML=Object.keys(localStorage[osake])

  //   }


  // }
