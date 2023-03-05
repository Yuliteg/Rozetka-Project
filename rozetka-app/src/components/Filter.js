import { useSelector } from "react-redux";
import { useState } from "react";
import PriceFilter from './filters/PriceFilter';
import CheckBox from './filters/CheckBox';
import BrandFilter from './filters/BrandFilter';
import { getUniqueValues } from "../helpersFunction/uniqueValues";


const Filter = ({ maxPrice }) => {
    const [inputValue, setInputValue] = useState([]);
    const product = useSelector(store => store.product);

    const { goodsCategory } = product;

    const seller = getUniqueValues(goodsCategory, 'seller');
    const brand = getUniqueValues(goodsCategory, 'brand');
    const country = getUniqueValues(goodsCategory, 'country');

    const handleChange = (e) => {
        let input = e.target.value;
        setInputValue(input.toLowerCase());
    }

    const filterBrands = () => {
        let filteredBrand = brand;
        if (inputValue) {
            filteredBrand = brand.filter(el => el.toLowerCase().includes(inputValue))
        }
        return filteredBrand;
    }

    return (
        <>
            <div className="seller-container checkbox-group">
                <p className='input-name'>Продавець</p>
                < CheckBox
                    category={seller}
                    goodsCategory={goodsCategory}
                    filterBySeller
                />
            </div>

            {/* <div className="brand-container checkbox-group">
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
                        />
                    )
                })}
            </div> */}

            <div className="country-container checkbox-group">
                <p className='input-name'>Країна виробник</p>
                < CheckBox
                    category={country}
                    goodsCategory={goodsCategory}
                    filterByCountry
                />
            </div>
            <PriceFilter maxPrice={maxPrice} />
        </>
    )
}


export default Filter;