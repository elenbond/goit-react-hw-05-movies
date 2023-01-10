import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { searchMovies } from 'services/API';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
    const [searchMovie, setSearchMovie] = useState([]);
    const [status, setStatus] = useState('idle');
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query' ?? '');

    useEffect(() => {
        const fetchSearchedMovies = async () => {
            try {
                setStatus('pending');
                const { data } = await searchMovies(query);

                if (data.length === 0) {
                    setStatus('rejected');
                    toast.error('Ooop`s, something went wrong. Please, try again!');
                    return;
                }
                setStatus('resolved');
                setSearchMovie(data.results);
            } catch (error) {
                console.log(error);
            }
            if (query === null) {
                setSearchMovie([]);
                return;
            };
            if (!query) {
                return;
            };
        };
        fetchSearchedMovies()
    }, [query])

    const onChange = (searchQuery) => {
        const newQueryChange = (searchQuery !== '' ? { query: searchQuery } : {});
        setSearchParams(newQueryChange);
        setSearchMovie([]);
    };

    return (
        <main>
            <SearchBox onSubmit={onChange} />
            {searchMovie.length > 0 && <MoviesList movies={searchMovie} />}
            {status === 'pending' && <Loader />}
        </main>
    )
}