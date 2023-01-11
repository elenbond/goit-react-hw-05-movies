import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'services/API';
import { ReviewItem, ReviewTitle } from './Reviews.styled';

export const Reviews = () => { 
    const [movieReviews, setMovieReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovieReviews = async () => {
            try {
                const { data } = await getMovieReviews(movieId);
                setMovieReviews(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovieReviews();
    }, [movieId]);

    return (
        <div>
            {movieReviews.length > 0 ? (
                <ul>
                    {movieReviews.map(({ id, author, content }) => (
                        <ReviewItem key={id}>
                            <ReviewTitle>Author: {author}</ReviewTitle>
                            <p>{content}</p>
                        </ReviewItem>
                    ))}
                </ul>
                ) : <p>Sorry, we do not have any reviews for this film 😢</p>
            }
        </div>
    );
}