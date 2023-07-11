const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzkzYzIwYjY0YjBjZGRmNWRjYTE2MmQyYzIzMDg4NSIsInN1YiI6IjY0YWExYTYyNjZhMGQzMDBlMzczN2Y0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3r5Y9X7SpVH27e2pAeKKU4h-WVK_mu1Zrt3MlRtGURo'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'

export async function loadMovies(url, rewrite) {
    
console.log(url);
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${AUTH_TOKEN}`
            }
        };
        const response = await fetch(url, options);
    const data = await response.json();

    const movies = data.results;

    const cardContainer = document.querySelector('.card-container');

    if (rewrite) {
        cardContainer.innerHTML = '';
    }

    movies.forEach((movie) => {
        if (movie.poster_path === null) {
            return
        }

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <img class="poster" src="${IMG_BASE_URL + movie.poster_path}" alt="${movie.title}"/>
        <h3 class="title">${movie.title}</h3>
        <p class="release-date">${movie.release_date}</p>
        <span class="rating">${movie.vote_average}</span>
        `
        cardContainer.appendChild(card);
    })
        
    } catch (error) {
        console.log(error);
    }
    

}




