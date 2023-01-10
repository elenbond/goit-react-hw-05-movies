import { useState, useEffect } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { toast } from 'react-toastify';
import { getMovieById } from 'services/API';
import { Loader } from "components/Loader/Loader";

export const MovieDetails = () => {
    const [movieDetails, setmovieDetails] = useState([]);
    const [status, setStatus] = useState('idle');
    const location = useLocation();
    const { movieId } = useParams();

    const { title, vote_average, overview, genres, poster_path, release_date } = movieDetails;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                setStatus('pending');
                const { data } = await getMovieById(movieId);

                if (data.length === 0) {
                    setStatus('rejected');
                    toast.error('Ooop`s, something went wrong. Please, try again!');
                    return;
                }

                setStatus('resolved');
                setmovieDetails(data);
            } catch (error) {
                setStatus('rejected');
                console.log(error);
            }
        };
        fetchMovieById();
    }, [movieId]);

    return (
        <main>
            <Link to={location?.state?.from || '/'}>Go back</Link>
            {movieDetails && (
                <>
                    <div>
                        <div>
                            <img src={`${IMG_URL}${poster_path}`} alt={title} width={400} />
                            <div>
                                <h2>{title} ({release_date})</h2>
                                <p>User score: {vote_average}/10</p>
                                <h3>Overview</h3>
                                <p>{overview}</p>
                                <h3>Genres</h3>
                                    {genres && (genres.map(genre => (
                                        <span key={genre.id}>{ genre.name } </span >
                                    )))}
                            </div>
                        </div>
                        <div>
                            <h3>Additional information</h3>
                            <ul>
                                <li>
                                    <Link to='cast'>Cast</Link>
                                </li>
                                <li>
                                    <Link to='reviews'>Reviews</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
            {status === 'pending' && <Loader />}
            <Outlet />
        </main>
    )
}