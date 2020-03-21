 

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
      let rivi=localStorage.getItem(helper)
      console.log(localStorage.getItem(helper))
      idListaChild=document.createElement('tr')
      tdChild1=document.createElement('td')
      tdChild2=document.createElement('td')
      tdChild3=document.createElement('td')
      tdChild4=document.createElement('td')
      tdChild5=document.createElement('td')
      tdChild1.innerHTML=JSON.parse(rivi)[0].maara
      tdChild2.innerHTML=JSON.parse(rivi)[0].maara
      tdChild3.innerHTML=JSON.parse(rivi)[0].maara
      tdChild4.innerHTML=JSON.parse(rivi)[0].maara
      tdChild5.innerHTML=JSON.parse(rivi)[0].maara

             
      idListaChild.appendChild(tdChild1)
      idListaChild.appendChild(tdChild2)
      idListaChild.appendChild(tdChild3)
      idListaChild.appendChild(tdChild4)
      idListaChild.appendChild(tdChild5)

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
  }

  function lisaaOsake() {
    document.getElementById('idLisaa').style.display="block"
  }


  // if (localStorage.length>0)  { 
  //   for (let oosake=0;oosake<localStorage.length-1;oosake++)
  //    {
  //     let helper=document.createElement(idLista,'p')
  //     helper.innerHTML=Object.keys(localStorage[osake])

  //   }


  // }
