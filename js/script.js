const cardWrapper = document.querySelector('.content-main_cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const films =[
    {
        id:0,
        title: 'Марсианин 1',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        raiting: 7.8,
        link: '../film.html',
        image: '../image/film.png"'
    },
    {
        id:1,
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        raiting: 7.8,
        link: '../film.html',
        image: '../image/film.png"'
    },
    {
        id:2,
        title: 'Марсианин 3',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        raiting: 7.8,
        link: '../film.html',
        image: '/image/film.png"'
    }
]
const render = (array) =>{
    cardWrapper.innerHTML = ' '

    array.forEach(function(item) {
            cardWrapper.insertAdjacentHTML('beforeend', `
                <a href="${item.link}" class="content-cards_item">
                            <div class="content-cards_item--img">
                                <img src="${item.image}" alt="film">
                            </div>
                            <div class="content-cards_title">
                                <h5>${item.title},</h5>
                                <span>${item.original}</span>
                            </div>
                            <p class="content-cards_subtitle">${item.category}</p>
                            <p class="content-cards_raiting">${item.raiting}</p>
                </a>
            `)
    })
}

searchButton.addEventListener('click', () =>{
    render(films.filter((item) => item.title.includes(searchInput.value)
    ))
})

render(films)