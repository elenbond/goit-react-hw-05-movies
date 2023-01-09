import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from 'services/API';

export const Cast = () => {
    const [movieCredits, setMovieCredits] = useState([]);
    const { movieId } = useParams();
    const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
    const BASE_IMG_URL = 'https://i.ibb.co/4ThsTsv/poster-coming-soon.jpg';

    useEffect(() => {
        const fetchMovieCredits = async () => {
            try {
                const { data } = await getMovieCredits(movieId);

                if (data.length === 0) {
                    return;
                }
                setMovieCredits(data.cast);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovieCredits();
    }, [movieId]);

    return (
        <ul>
            {movieCredits.map(({ id, name, character, profile_path }) => (
                <li key={id}>
                    <div>
                        <img src={profile_path ? `${IMG_URL}${profile_path}` : BASE_IMG_URL} alt={name} width={100} />
                    </div>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    );
}