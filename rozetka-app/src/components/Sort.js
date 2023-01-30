import Select from 'react-select'
import styled from 'styled-components';


const options = [
  { value: 'price-lowest', label: 'Від дешевих до дорогих'},
  { value: 'price-highests', label: 'Від дорогих до дешевих'},
  { value: 'price-rating', label: 'За рейтингом'}
]

const colorStyles = {
    control: (styles) => ({...styles, borderColor: "black"}),
    dropdownIndicator: (provided) => ({
        ...provided,
        "svg": {
          fill: "#3e77aa"
        }
      }),
}

const Sort = () => {

    return (
      <>
         <Wrapper>
            <Select 
              options={options}
              styles={colorStyles}
              defaultValue={options[0]}
              />
         </Wrapper>
        </>
    )
  }
  
  export default Sort

  const Wrapper = styled.div`
   margin-right: 3.5rem;
   float: right;
   width: 15%;
  `