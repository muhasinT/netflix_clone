
export const API_KEY = 'c6b73815aadfc9c8d7dd52ef3c07114a'
export const image_url = 'https://image.tmdb.org/t/p/original' 
export const base_url = 'https://www.themoviedb.org/3/'
export const fetchUrl = {
    trailer :`https://api.themoviedb.org/3/movie/505642/videos?api_key=c6b73815aadfc9c8d7dd52ef3c07114a&language=en-US66732`, 
    originals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    trending : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    action : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
    adventure:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`,
    animation:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
    history:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36&with_watch_monetization_types=flatrate`,

}


