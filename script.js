let screen = document.getElementById('screen')
let display = document.getElementById('display')
let example = document.getElementById('example')
function result(){
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+screen.value)
    .then((response) => response.json())
    .then((data) => {
        for(let i = 0; i < data[0].meanings.length; i++){
            display.innerHTML += 
            `
        
            <div id="content">
            <p>phonetics:${data[0].phonetics[i].text}</p>
            <p>Part of speech: ${data[0].meanings[i].partOfSpeech}</p>
            <p>Definition: ${data[0].meanings[i].definitions[0].definition}</p>
             <div id="example">
             <p>Example:</p>
             <p>${data[0].meanings[i].definitions[0].example}</p>
             </div>
            </div>
            `
        }
    })
}





{/* <p>Synonyms:</p>
<p>${data[0].meanings[i].definitions[0].synonyms}</p>
<p>Antonyms:</p>
<p>${data[0].meanings[i].definitions[0].antonyms}</p> */}
