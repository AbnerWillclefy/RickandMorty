async function getChar(id) {
    url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)
    return await response.json()
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

async function renderChar() {
    try {
        const randomNum = getRandom(0, 671)
        const data = await getChar(`${randomNum}`)
        
    
        let char = document.getElementById('char'),
            img = document.getElementById('image'),
            status = document.getElementById('status'),
            species = document.getElementById('species'),
            gender = document.getElementById('gender'),
            location = document.getElementById('location');
    
        char.innerText = data.name
        img.innerHTML = `<img src='${data.image}'></img>`

        
        status.innerHTML = data.status
        species.innerHTML = data.species
        gender.innerHTML = data.gender
        location.innerHTML = data.location.name

    } catch(error) {
        console.log(error)
    }
}

renderChar()