import styled from 'styled-components';

const PriceFilter = () => {
    const updateFilters = () => {
        console.log('Hello');
    }

    return (
        <PriceFilterWrapper>
            <div className='form-control'>
                <p className='input-name'>Ціна</p>
                <div className="price-wrapper">
                    <p>Ціна від {10}</p>
                    <p>До {500}</p>
                </div>
                <input
                    type='range'
                    name='price'
                    className='search-input'
                    onChange={updateFilters}
                    min='10'
                    max='500'
                />
            </div>
        </PriceFilterWrapper>
    );
};




export default PriceFilter

const PriceFilterWrapper = styled.div`
width: 100%;
margin-top: 0;

 .form-control {
    padding-bottom: 2rem;
    padding-left: 0;
    border-radius: 0;
    margin-top: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #e9e9e9;

    h5 {
      margin-bottom: 0.5rem;
    }

    .price-wrapper {
        display: flex;
        justify-content: space-between;
    }

    input[type='range'] {
	-webkit-appearance: none;
    width: 90%;
	height: 6px;
	background: grey;
	border-radius: 5px;
	background-image: linear-gradient(	#008000, #808000);
	background-repeat: no-repeat;
}
    input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
	height: 23px;
	width: 23px;
	border-radius: 50%;
	cursor: pointer;
    background-color: #f5f5f5;
    box-shadow: inset 0 0 0 2px #ebebeb;
   }
  }
`