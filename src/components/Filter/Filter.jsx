import { InputFilter } from './Filter.styled';
import { useSelector } from 'react-redux';
import { setFilter } from '../../redux/sliseFilter';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <InputFilter type="text" value={filterValue} onChange={changeFilter} />
    </label>
  );
};

