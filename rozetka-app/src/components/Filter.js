import { useSelector } from "react-redux";
import { useState } from "react";
import PriceFilter from './filters/PriceFilter';
import Checkbox from './filters/Checkbox';


const Filter = () => {
    const [inputValue, setInputValue] = useState([]);
    const product = useSelector(store => store.product);

    return (
        <>
            <div className="seller-container checkbox-group">
                <p className='input-name'>Продавець</p>
                < Checkbox
                    filterType="seller"
                    goods={product.goods}
                />
            </div>

            <div className="brand-container checkbox-group">
                <p className='input-name'>Бренд</p>
                < Checkbox
                    filterType="brand"
                    goods={product.goods}
                />
            </div>

            <div className="country-container checkbox-group">
                <p className='input-name'>Країна виробник</p>
                < Checkbox
                    filterType="country"
                    goods={product.goods}
                />
            </div>
        </>
    )
}

export default Filter;