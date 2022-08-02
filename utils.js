let now = new Date()

const parent = document.querySelector('.result');

function getZodiac (day, month) {
    if ( day >= 22 && month === 12 || day <= 19 && month === 1) return "Capricorn";
    if ( day >= 20 && month === 1 || day <= 18 && month === 2) return "Aquarius";
    if ( day >= 19 && month === 2 || day <= 20 && month === 3) return "Pisces";
    if ( day >= 21 && month === 3 || day <= 19 && month === 4) return "Aries";
    if ( day >= 20 && month === 4 || day <= 20 && month === 5) return "Taurus";
    if ( day >= 21 && month === 5 || day <= 20 && month === 6) return "Gemini";
    if ( day >= 21 && month === 6 || day <= 23 && month === 7) return "Cancer";
    if ( day >= 24 && month === 7 || day <= 22 && month === 8) return "Leo";
    if ( day >= 23 && month === 8 || day <= 22 && month === 9) return "Virgo";
    if ( day >= 23 && month === 9 || day <= 22 && month === 10) return "Libra";
    if ( day >= 23 && month === 10 || day <= 22 && month === 11) return "Scorpio";
    if ( day >= 22 && month === 11 || day <= 21 && month === 12) return "Sagittarius";
}

function getCountryList() {
    // using the spread operator, Set(), .map() and sort() 
    // Set() => unique values
    // Map() to create a new array with only the regions
    // Sort() to order the array alphabetically
    return [...new Set(randomPersonData.map(person => person.region).sort())];
}

function getAdultList() {
    return randomPersonData.filter(person => person.age >= 18).sort((a,b) => a.name.localeCompare(b.name))
}

function getCapricornWomen() {
    // Filter on female
    const females = randomPersonData.filter(person => person.gender === 'female')
    // Filter on age by subtracting the birthday in ms from the currentday in ms and then dividing it back to years
    const above30 = females.filter(female =>  ((now.getTime() - new Date(female.birthday.mdy).getTime()) / (1000 * 3600 * 24 * 365)) >= 30);
    // Filtering on wether their birthday is on or between 22 December - 19 January
    const capricorn = above30.filter(female => getZodiac(Number(female.birthday.dmy.slice(0,2)), Number(female.birthday.dmy.slice(3,5))) === "Capricorn")
    // Sorting the array alphabetically on the name
    capricorn.sort((a,b) => a.name.localeCompare(b.name))
    return capricorn
}

function clearScreen() {
    document.querySelector('.result').innerHTML = '';
}
