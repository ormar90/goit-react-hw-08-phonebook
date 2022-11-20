import { useDispatch } from 'react-redux';
import { queryFilter } from 'redux/filterSlice';
import { Input } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const query = event.target.value;
        dispatch(queryFilter(query));
    }

    return (
        <>
            <label htmlFor="filter">
                Find contacts by name
                <Input
                    type="text"
                    name="filter"
                    onChange={handleChange}
                />
            </label>
        </>
    );
}