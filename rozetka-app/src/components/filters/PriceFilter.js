import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { addPriceFilter } from '../../store/slices/goodsSlice';


const PriceFilter = () => {
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.product.goods);
  const priceFilter = useSelector((state) => state.product.priceFilter);
  const [sliderValue, setSliderValue] = useState(priceFilter); // Separate state for slider value
  const [minPrice, setMinPrice] = useState(priceFilter[0])
  const [maxPrice, setMaxPrice] = useState(priceFilter[1])

  useEffect(() => {
    const prices = goods.map((item) => item.price);
    setMinPrice(Math.min(...prices))
    setMaxPrice(Math.max(...prices))
    setSliderValue([minPrice, maxPrice]); // Set slider value separately from priceFilter
  }, [goods, minPrice, maxPrice]);

  const handlePrice = (e) => {
    setSliderValue(e); // Update the slider value
    dispatch(addPriceFilter(e));
  };

  return (
    <PriceFilterWrapper>
      <div className='form-control'>
        <p className='input-name'>Ціна</p>
        <div className="price-wrapper">
          <p>Ціна від {sliderValue[0]}</p>
          <p>До {sliderValue[1]}</p>
        </div>
        <Slider
          className='price-slider'
          range
          min={minPrice} 
          max={maxPrice}
          value={sliderValue} 
          onChange={handlePrice}
        />
      </div>
    </PriceFilterWrapper>
  );
};

export default PriceFilter;

const PriceFilterWrapper = styled.div`
  width: 100%;

 .form-control {
    padding-bottom: 2rem;
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
    margin-right: 1rem;
    display: flex;
    justify-content: space-between;
      
      @media (max-width: 768px) {
    flex-direction: column;
      }
    }
    .price-slider {
     margin-left: 0.5rem;
     width: 90%;
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
  box-shadow: 0 0 3px gray !important;
	}
}
`