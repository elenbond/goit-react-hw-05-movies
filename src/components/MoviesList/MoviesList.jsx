import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieItem, MovieLink } from './MoviesList.styled';

export const MoviesList = ({movies, path = ''}) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ id, title }) => (
                <MovieItem key={id}>
                    <MovieLink to={`${path}${id}`} state={{from: location}}>
                        {title}
                    </MovieLink>
                </MovieItem>
            ))}
        </ul>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    path: PropTypes.string,
}