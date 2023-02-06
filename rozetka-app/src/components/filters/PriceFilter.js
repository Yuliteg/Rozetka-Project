import styled from 'styled-components';
import { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = ({ maxPrice }) => {
    const [priceValue, setPriceValue] = useState([0, 50]);

    const handlePrice = (e) => {
        setPriceValue(e.target.value);
    }

    return (
        <PriceFilterWrapper>
            <div className='form-control'>
                <p className='input-name'>Ціна</p>
                <div className="price-wrapper">
                    <p>Ціна від 0</p>
                    <p>До 500</p>
                </div>
                <Slider range className='price-slider' />
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
        padding-right: 1.5rem;
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
       flex-direction: column;
      }
    }
    .price-slider {
        padding-right: 1.5rem;
        width: 85%;
    }
  }

.rc-slider {
    &-rail {
  height: 3px;
  width: 100%; 
  background-color: #a6a5a5 !important;  
  border-radius: 3px;  
    }

    &-track {
  height: 3px;
  border-radius: 6px;
  background-color: #00a046 !important;   
    }

    &-handle {
  width: 15px;
  height: 15px;
  border: none;
  opacity: 1;
  border-radius: 50%;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 0 1px #ebebeb;
  cursor: pointer;
	}
    &-handle:active {
		border-color: gray !important;
        box-shadow: 0 0 3px gray;
	}
}
`