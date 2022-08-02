function createMatchmakingCard (data, btn) {
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
    const zodiacSign = getZodiac(Number(data.birthday.dmy.slice(0,2)), Number(data.birthday.dmy.slice(3,5)))
    zodiac.innerText = `Zodiac: ${zodiacSign}`
    text.appendChild(name)
    text.appendChild(age)
    text.appendChild(country)
    text.appendChild(zodiac)
    el.appendChild(img)
    el.appendChild(text)
    if (btn){
        const button = document.createElement('button')
        button.classList.add('right')
        button.innerHTML = `Find Matches!`
        button.addEventListener('click', () => {
            const person = getSinglePersonData(data.name, data.surname)
            const matches = getMatches(zodiacSign)
            createMatchesOverview(person, matches)

        
     })
     el.appendChild(button)
    }
    return el
}

const matchmaking = document.querySelector('#matchmaking').addEventListener('click', (e) => {
    e.preventDefault;
    clearScreen();
    const adultsOnly = getAdultList();
    adultsOnly.forEach(adult => addToDom(createMatchmakingCard(adult, 'y')))
});

function createMatchesOverview(person, matches) {
    clearScreen();
    const subjectCard = createSubjectCard(person[0], matches)
    addToDom(subjectCard)
    const btn = document.createElement('button')
    btn.innerText = `Reset`
    btn.classList.add('card__span')
    btn.style.marginBottom = '2rem'
    btn.addEventListener('click', () => {
        clearScreen();
        const adultsOnly = getAdultList();
        adultsOnly.forEach(adult => addToDom(createMatchmakingCard(adult, 'y')))
    })
    addToDom(btn)
    getZodiacList(matches[0]).forEach(person => addToDom(createMatchmakingCard(person)))
}

function createSubjectCard(person, matches) {
    const el = document.createElement('div')
    el.classList.add('card', 'card__span')
    const img = document.createElement('img')
    img.classList.add('card__img')
    img.src = person.photo;
    const text = document.createElement('div')
    text.classList.add('card__name')
    const name = document.createElement('p')
    name.innerText = `${person.name} ${person.surname}`
    const age = document.createElement('p')
    age.innerText = `Age: ${person.age}`
    const country = document.createElement('p')
    country.innerText = `Country: ${person.region}`
    const zodiac = document.createElement('p')
    const zodiacSign = getZodiac(Number(person.birthday.dmy.slice(0,2)), Number(person.birthday.dmy.slice(3,5)))
    zodiac.innerText = `Zodiac: ${zodiacSign}`
    const match = document.createElement('div')
    match.classList.add('card__name')
    const matchedZodiac = document.createElement('p')
    matchedZodiac.innerText = `You match with: ${matches[0]}`
    const zodiacText = document.createElement('p')
    zodiacText.innerText = `${matches[1]}`
    match.appendChild(matchedZodiac)
    match.appendChild(zodiacText)
    text.appendChild(name)
    text.appendChild(age)
    text.appendChild(country)
    text.appendChild(zodiac)
    el.appendChild(img)
    el.appendChild(text)
    el.appendChild(match)
    return el
}