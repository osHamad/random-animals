document.getElementById('generate').addEventListener('click', ()=>{
    // use api depending on the selected animal species
    const animalApi = {
        'cats': ['https://aws.random.cat/meow', 'file'],
        'dogs': ['https://random.dog/woof.json', 'url'],
        'foxes': ['https://randomfox.ca/floof/', 'image'],
        'elephants': ['https://elephant-api.herokuapp.com/elephants/random', 'image'],
        'ducks': ['https://random-d.uk/api/random', 'url']
    }

    // stores the select tag value of the selected species
    let species = document.getElementById('species-select')
    species = species.options[species.selectedIndex].value

    document.getElementById('animal-image').src = '/icons/loading_gif.gif'



    getResponse(animalApi[species][0], callback, animalApi[species][1])

    
})


function getResponse(theUrl, callback, jsonKey)
{
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText, jsonKey)
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}


function callback(changeTo, jsonKey){
    let image = document.getElementById('animal-image')
    image.src = JSON.parse(changeTo)[jsonKey]
}


document.getElementById('new-tab').addEventListener('click', ()=>{
    let animalImage = document.getElementById('animal-image').src
    console.log(animalImage)
    if (animalImage =! '' || animalImage != '/icons/loading_gif.gif' || animalImage != '/icons/default.png'){
        window.open(animalImage, '_blank').focus();
    }
})
