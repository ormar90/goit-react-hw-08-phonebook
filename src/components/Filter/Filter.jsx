import PropTypes from 'prop-types';
import { Input } from './Filter.styled';


export const Filter = ({ onFilter }) => {
    
    return (
        <>
            <label htmlFor="filter">
                Find contacts by name
                    <Input
                        type="text"
                        name="filter" 
                        onChange={onFilter}
                    />
            </label>
        </>
    );    
}

Filter.propTypes = {
    onFilter: PropTypes.func,
}