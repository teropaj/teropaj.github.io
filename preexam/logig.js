let wordItem=0,deleteCounter=3


//document.getElementById('words').innerHTML=localStorage.getItem(Object.keys(localStorage)[wordItem])
document.getElementById('words').innerHTML=Object.keys(localStorage)[wordItem] 
function addWord (word,value) { localStorage.setItem(word,value)}

document.getElementById('addWord').addEventListener("submit", logSubmit)

nextWordButton=document.getElementById('nextWord')
nextWordButton.addEventListener("click", nextWord)
idWords=document.getElementById('words')

//show word
document.getElementById('showWord').addEventListener("click", showWord)

document.getElementById('delete').addEventListener("click", deleteWord)

if (localStorage.length===0) {
    target=
            {target:[
                {value:'pollen'},
                {value:'siitepöly'}
            ]
        }
        document.getElementById('words').innerHTML=target.target[0].value
        logSubmit(target)
    
}

function logSubmit (event)
    {    
        console.log(event)
        debugger
        localStorage.setItem(event.target[0].value, event.target[1].value) 
        event.preventDefault();
        //console.log(localStorage.event.target[0])
        document.getElementById('firstWord').value=""
        document.getElementById('valueWord').value=""
    }

function nextWord() {
    (wordItem<localStorage.length-1) ? wordItem++ : wordItem=0
    document.getElementById('words').innerHTML=Object.keys(localStorage)[wordItem] 
     
    idWords.classList.add('animate-in');
    setInterval(()=>idWords.classList.remove('animate-in')
    , 1000)
}

function showWord() {
    console.log('was here')
    //debugger
    //document.getElementById('value').innerHTML=localStorage.getItem(Object.keys(localStorage)[wordItem])
    document.getElementById('words').innerHTML=localStorage.getItem(Object.keys(localStorage)[wordItem],
    2000) 
    setTimeout(()=>document.getElementById('words').innerHTML=Object.keys(localStorage)[wordItem], 2000)
}

function deleteWord() {
    deleteCounter--;
    if (deleteCounter===2) {
        console.log('deleteCounter: ',deleteCounter)
        setTimeout(()=>{document.getElementById('delete').innerHTML="delete";
        deleteCounter=3},   3000)
    }
    document.getElementById('delete').innerHTML=deleteCounter
    if(deleteCounter=== 0) {localStorage.removeItem(Object.keys(localStorage)[wordItem])
    document.getElementById('delete').innerHTML="delete"}
}
function animate() {
    title.classList.remove('animate-in');
    for (var i = 0; i < courseFeatureElements.length; i++) {
      courseFeatureElements[i].classList.remove('animate-in');
    }
    button.classList.remove('animate-in');
  
    setTimeout(function () {
      title.classList.add('animate-in');
    }, 1000);
  
    setTimeout(function () {
      courseFeatureElements[0].classList.add('animate-in');
    }, 3000);
  
    setTimeout(function () {
      courseFeatureElements[1].classList.add('animate-in');
    }, 4500);
  
    setTimeout(function () {
      courseFeatureElements[2].classList.add('animate-in');
    }, 6000);
  
    setTimeout(function () {
      courseFeatureElements[3].classList.add('animate-in');
    }, 7500);
  
    setTimeout(function () {
      courseFeatureElements[4].classList.add('animate-in');
    }, 9000);
  
    setTimeout(function () {
      courseFeatureElements[5].classList.add('animate-in');
    }, 10500);
  
    setTimeout(function () {
      courseFeatureElements[6].classList.add('animate-in');
    }, 12000);
  
    setTimeout(function () {
      button.classList.add('animate-in');
    }, 13500);
  }
  function addWords () {console.log('was here')
  document.querySelector('.hidden').classList.remove('hidden')
  document.querySelector('#menu').classList.add('hidden')
}
  function closeAdd () {
    document.querySelector('#add').classList.add('hidden')
    document.querySelector('#menu').classList.remove('hidden')
  }

