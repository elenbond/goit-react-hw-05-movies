import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({movies, path = ''}) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`${path}${id}`} state={{from: location}}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}