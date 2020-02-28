let wordItem=0

//document.getElementById('words').innerHTML=localStorage.getItem(Object.keys(localStorage)[wordItem])
document.getElementById('words').innerHTML=Object.keys(localStorage)[wordItem] 
function addWord (word,value) { localStorage.setItem(word,value)}

document.getElementById('addWord').addEventListener("submit", logSubmit)

document.getElementById('nextWord').addEventListener("click", nextWord)

//show word
document.getElementById('showWord').addEventListener("click", showWord)

document.getElementById('delete').addEventListener("click", deleteWord)

function logSubmit (event)
    {    
        console.log(event)
        debugger
        localStorage.setItem(event.target[0].value, event.target[1].value) 
        event.preventDefault();
        //console.log(localStorage.event.target[0])
    }

function nextWord() {
    (wordItem<localStorage.length-1) ? wordItem++ : wordItem=0
    document.getElementById('words').innerHTML=Object.keys(localStorage)[wordItem] 
}

function showWord() {
    console.log('was here')
    //debugger
    document.getElementById('value').innerHTML=localStorage.getItem(Object.keys(localStorage)[wordItem])
    setTimeout(()=> document.getElementById('value').innerHTML="",
    2000) 
}

function deleteWord() {
    localStorage.removeItem(Object.keys(localStorage)[wordItem])
}

