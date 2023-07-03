import { useSelector } from "react-redux";
// import PriceFilter from './filters/PriceFilter';
import Checkbox from './filters/Checkbox';
import PriceFilter from "./filters/PriceFilter";


const Filter = () => {
    const product = useSelector(store => store.product);

    return (
        <>
            <div className="checkbox-group">
                <p className='input-name'>Продавець</p>
                < Checkbox
                    filterType="seller"
                    goods={product.goods}
                />
            </div>

            <div className="checkbox-group">
                <p className='input-name'>Бренд</p>
                < Checkbox
                    filterType="brand"
                    goods={product.goods}
                    checkboxWithInput
                />
            </div>

            <div className="checkbox-group">
                <p className='input-name'>Країна виробник</p>
                < Checkbox
                    filterType="country"
                    goods={product.goods}
                />
            </div>

            <PriceFilter />
        </>
    )
}

export default Filter;