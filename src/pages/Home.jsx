import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMovies } from "services/API";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from '../components/Loader/Loader';

export const Home = () => {
    const [status, setStatus] = useState('idle');
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => { 
            try { 
                setStatus('pending');
                const { data } = await getTrendingMovies();
                console.log(data.results.length);
                if (data.length !== 0) {
                    setStatus('resolved');
                    setTrendingMovies(data.results);
                    return;
                } else
                if (data.length === 0) {
                    setStatus('rejected');
                    toast.error('Ooop`s, something went wrong. Please, try again!');
                    return;
                }
                // setStatus('resolved');
                // setTrendingMovies(data.results);
            } catch (error) {
                console.log(error);
                setStatus('rejected');
            }
        }
        fetchTrendingMovies();
    }, []);

    if (trendingMovies === null) {
        return;
    }
    
    return (
        <main>
            <h1>Trending today</h1>
            {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} path={'movies/'} />}
            {status === 'pending' && <Loader />}
        </main>
    )
}