import { useState, useEffect } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { toast } from 'react-toastify';
import { getMovieById } from 'services/API';
import { Loader } from "components/Loader/Loader";
import { Container, MovieThumb, BackLink, DescrThumb, InfoThumb, InfoList, InfoItem, InfoLink } from './MovieDetails.styled';

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
            <BackLink to={location?.state?.from || '/'}>Go back</BackLink>
            {movieDetails && (
                <>
                    <Container>
                        <MovieThumb>
                            <img src={`${IMG_URL}${poster_path}`} alt={title} width={300} />
                            <DescrThumb>
                                <h2>{title} ({release_date})</h2>
                                <p>User score: {vote_average}/10</p>
                                <h3>Overview</h3>
                                <p>{overview}</p>
                                <h3>Genres</h3>
                                    {genres && (genres.map(genre => (
                                        <span key={genre.id}>{ genre.name } </span >
                                    )))}
                            </DescrThumb>
                        </MovieThumb>
                        <InfoThumb>
                            <h3>Additional information</h3>
                            <InfoList>
                                <InfoItem>
                                    <InfoLink to='cast'>Cast</InfoLink>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLink to='reviews'>Reviews</InfoLink>
                                </InfoItem>
                            </InfoList>
                        </InfoThumb>
                    </Container>
                </>
            )}
            {status === 'pending' && <Loader />}
            <Outlet />
        </main>
    )
}