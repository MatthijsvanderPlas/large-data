let now = new Date()
let matched = ``;
let text = ``;

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

function getZodiacList(zodiac) {
    const adultsOnly = getAdultList();
    return adultsOnly.filter(person => getZodiac(Number(person.birthday.dmy.slice(0,2)), Number(person.birthday.dmy.slice(3,5))) === zodiac)
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

function getSinglePersonData(name, surname) {
    return randomPersonData.filter(person => person.name === name && person.surname === surname)
}

function clearScreen() {
    document.querySelector('.result').innerHTML = '';
}

const addToDom = element =>  parent.appendChild(element)

// Returns the Matching zodiac sign for the input zodiac sign and short explanation text through switch()
const getMatches = (zodiac) => {

    switch(zodiac) {
       
        case 'Aries':
            matched = 'Aquarius'
            text = `
            There's never a dull moment between an Aries and Aquarius, which makes their relationship extremely exciting. Both signs are insanely adventurous, so they're always up for anything—in and out of the bedroom. They enjoy trying new things and make sure to have a good time in the process. They especially love doing things together as a team.
            
            While other couples might grow tired of one another, these two stay strong and always enjoy being in each other's company. But they both know the importance of hanging out with friends and having some solo time, too.
            `
            return [matched, text]
        
        case 'Taurus':
            matched = `Cancer`
            text = `
            Taurus and Cancer seriously get each other. These two zodiac signs work well with one another because they hold a tight connection both physically and emotionally. They understand each other inside and out, which helps allow their bond to ignite even more as the relationship grows.
        
            There's also a great appreciation for one another, as both signs value who the other is and what they have to offer. This couple is powerful because they each know how to complement the other with ease, making for a long lasting love that's hard to come by.
            `
            return [matched, text]
    
        case 'Gemini':
            matched =  `Aquarius`
            text = `
            A Gemini and Aquarius have a crazy mental and emotional connection. They get each other to the fullest, like they have known one another for years even if it's only been months (or weeks). These two signs are also big on creativity and ideas, which they like to bounce off each other constantly: "Should we go to the Rocky Mountains tomorrow?" "Let's have frog legs for dinner!"
            
            While they are very in tune with one another and enjoy spending as much time together as possible, they also enjoy their independence. But this doesn't seem to bother the relationship, since they both understand the importance of spending time apart to make the heart grow fonder.
            `
            return [matched, text]
    
        case 'Cancer':
            matched = `Pisces`
            text = `
            Cancer and Pisces are two cool water signs and instinctively have one massive cosmic connection. They work well together because each one knows just who the other is and they are proud of that. These signs also have a very strong sense of themselves, which makes them easily able to form a solid bond that can last.
            
            
            To make things even better, they have very compatible individual traits that mesh well together. Pisces is all about connection with others, while Cancer is devoted to nurturing those around them. That allows the two to work well. The end result is a deep, mental connection that isn't easily taken away.
            `
            return [matched, text]
    
        case 'Leo':
            matched = `Sagittarius`
            text = `
            The passion is high between Leo and Sagittarius, as both signs both enjoy life and love others who feel the same. They are both passionate about what they want out of this world and extremely encouraging in helping the other achieve any goal or dream. Both are fire signs and have a profound understanding of the other, which helps them to get along so easily.
            
            This is the couple that's so fun, everyone flocks to be around them. You know the type: the exact couple you have wanted to be for years. The passion these two signs have for life, love, and each other is incredibly intoxicating.
            `
            return [matched, text]
    
        case 'Virgo':
            matched = `Taurus`
            text = `
            As both are earth signs, Virgo and Taurus really hit it off. Easygoing and practical in their everyday lives, their relationship is cool, calm and collected. These two zodiac signs are also honest and sincere, which makes them incredible people to get close to, especially in a serious, long-term relationship.
            
            You won't find two other signs as devoted to each other as Virgo and Taurus. They not only have a lot of integrity, but they also have the same characteristics and values. This allows them to truly understand one another to the fullest.        
            `
            return [matched, text]
    
        case 'Libra':
            matched = `Gemini`
            text = `
            A relationship between a Libra and Gemini is all about a strong intellectual connection. Both are air signs and deep into mental stimulation. The mind is a very interesting and sexy thing to them, and they enjoy learning more about it as time goes on.
            
            These signs also provide a great understanding and appreciation for the other, which makes them an excellent match. And as far as harmony goes, they know how to work it. A couple like this enjoys keeping the peace within their relationship by offering friendship, knowledge, and understanding to one another.        
            `
            return [matched, text]

        case 'Scorpio':
            matched = `Cancer`
            text = `
            Sometimes having two passionate people in a relationship doesn't work. However, if one person is a Scorpio and the other is a Cancer, it can be perfect. These two water signs are intense when it comes to emotions, but that only seems to make them even more compatible.
            
            Scorpio and Cancer feed off each other's passion, which allows them to work well when paired. They're also deeply devoted to one another and provide a terrific support system. Both share very similar morals and are caring toward each other and those around them.            
            `
            return [matched, text]

        case 'Sagittarius':
            matched = `Aries`
            text = `
            Sagittarius and Aries are both fire signs, so you can expect some serious hot passion between the two, making for a dynamite pair. They have insane amounts of energy to bring into the relationship, which only grows stronger as it continues to blossom. And they both appreciate each other's wild enthusiasm for the other person and life around them.
            
            While in some instances opposites attract, these two signs show that being more alike can bring you even closer. This is a couple that can power through anything life throws their way, and they will do it together with some serious pep in their step.
            `
            return [matched, text]

        case 'Capricorn':
            matched = `Taurus`
            text = `
            There's a reason these two signs have been reported to have more chemistry than any of the other astrological signs. Capricorn and Taurus have something most only daydream about: endless adoration. These two lovebirds will be together forever and actually enjoy one another's company to the end.
            
            The reason their bond is so tight is because they hold the sincerest respect and love for each other that only true soul mates can offer. Their admiration for the other is almost unnerving, but also incredibly touching.            
            `
            return [matched, text]

        case 'Aquarius':
            matched = `Gemini`
            text = `
            Aquarius and Gemini are both air signs that have a killer psychological connection. And it goes deep—really deep, like finishing each other's sentences. Their relationship is almost mystical because it's one no one else can comprehend. After all, only they know what's going on in their heads, and each other's.
            
            They get what works for them and don't care that others might not see it. And while both of these signs have a strong sense of individuality, they don't let it hurt their relationship. In fact, it only strengthens it. But in the end, these two choose to stride through life walking arm-in-arm because they'd rather be together than apart.
            `
            return [matched, text]

        case 'Pisces':
            matched = `Scorpio`
            text = `
            Another pair that's very intuitive to one another is Pisces and Scorpio. These two zodiac signs can get into each other's minds and know what they are thinking almost as well as if they were thinking it themselves. But they aren't just into intellect; they both have a hunger to understand the other's body and soul and learn what makes the other person tick.
            
            They want to know everything about the other because they hold such a high respect for the other sign. The passion is sky-high with this couple, and they aren't afraid of being romantic, no matter how mushy and over-the-top.            
            `
            return [matched, text]
    }        
    
}