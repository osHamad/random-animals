document.getElementById('generate').addEventListener('click', ()=>{
    // use api depending on the selected animal species
    const animalApi = {
        'cats': 'https://aws.random.cat/meow',
        'dogs': 'https://random.dog/woof.json',
        'foxes': 'https://randomfox.ca/floof/',
        'elephents': 'https://elephant-api.herokuapp.com/elephants/random',
        'ducks': 'https://random-d.uk/api/v2/random'
    }

    // stores the select tag value of the selected species
    let species = document.getElementById('species-select')
    species = species.options[species.selectedIndex].value



    
    let res = getResponse('https://aws.random.cat/meow', callback)

    
})


function getResponse(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


function callback(changeTo){
    let image = document.getElementById('animal-image')
    console.log(changeTo)

}



