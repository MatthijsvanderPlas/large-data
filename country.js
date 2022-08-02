const country = document.querySelector('#country').addEventListener('click', (e) =>{
    e.preventDefault;
    clearScreen();
    const countryList = getCountryList();
    countryList.forEach(country => {
        const el = document.createElement('div');
        el.innerHTML = country;
        el.classList.add('country')
        addToDom(el)
    })
});
