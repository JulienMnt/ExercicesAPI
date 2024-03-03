"use strict"

function fetchMovie(){
    return fetch("https://api.themoviedb.org/3/movie/497?api_key=942e2d6a698bb8b94e6e495c528572aa&language=fr-FR")
        .then((response) => response.json())
}

async function displayMovie(){
    const data = await fetchMovie()
    document.getElementById("movie").innerHTML = `
    <h1>${data.title}</h1>
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt = "${data.title}" />
    `
}

displayMovie();
