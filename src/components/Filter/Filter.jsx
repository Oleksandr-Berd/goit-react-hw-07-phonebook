import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'Redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setStatusFilter(evt.currentTarget.value));
  };

  return (
    <label htmlFor="" className={css.label__filter}>
      Find contacts by name
      <input type="text" onChange={onChange} className={css.input__filter} />
    </label>
  );
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
};

export default Filter;
