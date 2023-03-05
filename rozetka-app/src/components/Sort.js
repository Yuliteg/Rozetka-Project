import Select from 'react-select'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { sortByPriceUp, sortByPriceDown, sortByRating } from '../store/slices/goodsSlice';
import { useEffect, useState } from 'react';

const options = [
  { value: 'price-lowest', label: 'Від дешевих до дорогих' },
  { value: 'price-highests', label: 'Від дорогих до дешевих' },
  { value: 'price-rating', label: 'За рейтингом' }
]

const colorStyles = {
  control: (styles) => ({ ...styles, borderColor: "black" }),
  dropdownIndicator: (provided) => ({
    ...provided,
    "svg": {
      fill: "#3e77aa"
    }
  }),
}


const Sort = ({bySeller, byCountry}) => {
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSort(e.value)
  }

  useEffect(() => {
    switch (sort) {
      case 'price-lowest':
        dispatch(sortByPriceUp())
        setSort(sort)
        return;
        case 'price-highests':
          dispatch(sortByPriceDown())
          setSort(sort)
          return;
          case 'price-rating':
            dispatch(sortByRating())
            setSort(sort)
            return;
    }
  }, [sort, dispatch, bySeller, byCountry])

  return (
    <>
      <Wrapper>
        <Select
          styles={colorStyles}
          defaultValue={options[0]}
          options={options}
          onChange={(e) => handleChange(e)}
        >
        </Select>
      </Wrapper>
    </>
  )
}


export default Sort

const Wrapper = styled.div`
   margin-right: 3.5rem;
   float: right;
   width: 15%;

   .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.5rem;
  }
  
  label {
    padding-right: 3%;
    font-size: 1rem;
    text-transform: capitalize;
  }
  `