import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUniqueValues } from '../helpersFunction/uniqueValues';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import PriceFilter from './filters/PriceFilter';
import SellerFilter from './filters/SellerFilter';
import BrandFilter from './filters/BrandFilter';
import CountryFilter from './filters/CountryFilter'

const Filter = ({ goods, maxPrice }) => {
    const [inputValue, setInputValue] = useState([]);
    const product  = useSelector(store => store.product);
    const dispatch = useDispatch();

    const { bySeller, byCountry, byBrand } = product;

    const seller = getUniqueValues(goods, 'seller');
    const brand = getUniqueValues(goods, 'brand');
    const country = getUniqueValues(goods, 'country');

    const handleChange = (e) => {
     let input = e.target.value;
     setInputValue(input.toLowerCase());
    }

    const filterBrands = () => {
      let filteredBrand = brand;
      if(inputValue) {
        filteredBrand = brand.filter(el => el.toLowerCase().includes(inputValue))
      }
      return filteredBrand;
    }

    return (
        <>
            <div className="seller-container checkbox-group">
                <p className='input-name'>Продавець</p>
                {seller.map((item, index) => {
                    return (
                        <SellerFilter
                            item={item}
                            key={index}
                            bySeller={bySeller}
                        />
                    )
                })}
            </div>

            <div className="brand-container checkbox-group">
                <p className='input-name'>Бренд</p>
                <InputGroup className='input-brand-search'>
                    <Form.Control
                        placeholder="Пошук"
                        className="input-brand-control" 
                        onChange={handleChange}
                        />
                </InputGroup>

                {filterBrands().map((item, index) => {
                    return (
                        <BrandFilter 
                        item={item} 
                        key={index} 
                        inputValue={inputValue} 
                        byBrand={byBrand}/>
                    )
                })}
            </div>

            <div className="country-container checkbox-group">
                <p className='input-name'>Країна виробник</p>
                {country.map((item, index) => {
                    return (
                        <CountryFilter
                            item={item}
                            key={index}
                            byCountry={byCountry}
                        />
                    )
                })}
            </div>
            <PriceFilter maxPrice={maxPrice}/>
        </>
    )
}


export default Filter;