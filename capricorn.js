function createCapricornCard (parent, data) {
    const el = document.createElement('div')
    el.classList.add('card')
    const img = document.createElement('img')
    img.classList.add('card__img')
    img.src = data.photo;
    const text = document.createElement('div')
    text.classList.add('card__name')
    const name = document.createElement('p')
    name.innerText = `${data.name} ${data.surname}`
    const date = document.createElement('p')
    date.innerText = `${data.birthday.dmy}`
    text.appendChild(name)
    text.appendChild(date)
    el.appendChild(img)
    el.appendChild(text)
    return el
}

const capricorn = document.querySelector('#capricorn').addEventListener('click', (e) => {
    e.preventDefault;
    clearScreen();
    const capricornWomen = getCapricornWomen();
    capricornWomen.forEach(woman => addToDom(createCapricornCard(parent, woman)))
})