import { useSelector } from "react-redux";
import { useState } from "react";
import PriceFilter from './filters/PriceFilter';
import CheckBox from './filters/Checkbox';
import { getUniqueValues } from "../helpersFunction/uniqueValues";


const Filter = ({ goods, min, max }) => {
    const [inputValue, setInputValue] = useState([]);
    const product = useSelector(store => store.product);

    return (
        <>
            <div className="seller-container checkbox-group">
                <p className='input-name'>Продавець</p>
                < CheckBox
                    filterType="seller"
                    goods={product.goods}
                />
            </div>

            {/* <div className="brand-container checkbox-group">
                <p className='input-name'>Бренд</p>
                < CheckBox
                    category={brand}
                    goodsCategory={goodsCategory}
                    filterByBrand
                    checkboxWithInput
                />
            </div> */}

            <div className="country-container checkbox-group">
                <p className='input-name'>Країна виробник</p>
                < CheckBox
                    filterType="country"
                    goods={product.goods}
                />
            </div>
        </>
    )
}

export default Filter;