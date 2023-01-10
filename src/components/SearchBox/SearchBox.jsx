import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim() === '') {
            toast.warn('Please, enter your search query in the field!');
            return;
        }
        onSubmit(searchQuery);
        setSearchQuery('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value.toLowerCase())} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}