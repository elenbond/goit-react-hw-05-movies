import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '008963a2f5368d14d83b4098406b5126';

axios.defaults.baseURL = URL;

export const getTrendingMovies = async () => { 
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    console.log(response.data.results);
    return response;
}

export const searchMovie = () => {}

export const getMovieById = async (id) => { 
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    console.log(response.data);
    return response;
}

export const getMovieCredits = async (movieId) => { 
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
    console.log(response.data);
    return response;
}

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&page=1`);
    console.log(response.data);
    return response;
}