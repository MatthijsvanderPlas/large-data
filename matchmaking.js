function createMatchmakingCardToDom (parent, data, index) {
    const el = document.createElement('div')
    el.classList.add('card')
    const img = document.createElement('img')
    img.classList.add('card__img')
    img.src = data.photo;
    const text = document.createElement('div')
    text.classList.add('card__name')
    const name = document.createElement('p')
    name.innerText = `${data.name} ${data.surname}`
    const age = document.createElement('p')
    age.innerText = `Age: ${data.age}`
    const country = document.createElement('p')
    country.innerText = `Country: ${data.region}`
    const zodiac = document.createElement('p')
    zodiac.innerText = `Zodiac: ${getZodiac(Number(data.birthday.dmy.slice(0,2)), Number(data.birthday.dmy.slice(3,5)))}`
    const match = document.createElement('div')
    match.classList.add('card__name')
    const button = document.createElement('button')
    button.classList.add('right')
    button.id = index;
    button.innerHTML = `Find Matches!`
    text.appendChild(name)
    text.appendChild(age)
    text.appendChild(country)
    text.appendChild(zodiac)
    el.appendChild(img)
    el.appendChild(text)
    el.appendChild(button)
    return el
}

const matchmaking = document.querySelector('#matchmaking').addEventListener('click', (e) => {
    e.preventDefault;
    clearScreen();
    const adultsOnly = getAdultList();
    adultsOnly.forEach(adult => addToDom(createMatchmakingCardToDom(parent, adult)))
});