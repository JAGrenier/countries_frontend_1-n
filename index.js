const main = document.querySelector('#cities')

fetch('http://localhost:3000/cities')
.then(response => response.json())
.then(result=> result.forEach(city =>{
    //create
    const countryCard = document.createElement('div')
    // const h2 = document.createElement('h2')
    const title = document.createElement('a')
    console.log(title)
    //manipulate 
    countryCard.className = 'card'
    title.textContent = city.name
    //append 
    main.appendChild(countryCard)
    countryCard.append(a)
    
    // h2.appendChild(title)


}))

// .then(result => result.map(city =>{
//     let h1 = document.createElement('h1')
//}))