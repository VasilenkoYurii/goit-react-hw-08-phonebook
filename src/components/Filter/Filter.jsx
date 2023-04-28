import { useDispatch } from 'react-redux';
import { SearchLabel, SearchInput, SearchTitle } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <SearchLabel>
      <SearchTitle>Find contsct by name</SearchTitle>
      <SearchInput
        type="text"
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      ></SearchInput>
    </SearchLabel>
  );
};

export default Filter;
