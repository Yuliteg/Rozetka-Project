import { useSelector, useDispatch } from "react-redux";
import { filterSeller } from "../store/slices/filtersGoodsSlice";
import { getUniqueValues } from '../helpersFunction/UniqueValues';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import PriceFilter from './filters/PriceFilter';
import SellerFilter from './filters/SellerFilter';
import BrandFilter from './filters/BrandFilter';

const Filter = ({ goods }) => {
    const product  = useSelector(store => store.product);
    const dispatch = useDispatch();

    const { bySeller } = product;

    const seller = getUniqueValues(goods, 'seller');
    const brand = getUniqueValues(goods, 'brand');
    const country = getUniqueValues(goods, 'country');

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
                        className="input-brand-control" />
                </InputGroup>

                {brand.map((item, index) => {
                    return (
                        <BrandFilter item={item} key={index} />
                    )
                })}
            </div>

            <div className="country-container checkbox-group">
                <p className='input-name'>Країна виробник</p>
                {country.map((item, index) => {
                    return (
                        <div key={index} className="column">
                            <input type="checkbox" name="name" value="value" className='checkbox' />
                            <label>{item}</label>
                        </div>
                    )
                })}
            </div>
            <PriceFilter />
        </>
    )
}


export default Filter;