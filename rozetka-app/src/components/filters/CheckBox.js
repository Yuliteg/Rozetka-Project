import { useDispatch } from "react-redux";
import { addSellerFilter, removeSellerFilter, removeCountryFilter, addCountryFilter } from "../../store/slices/goodsSlice";
import { useEffect, useState } from "react";

const CheckBox = ({ category, goodsCategory, filterBySeller, filterByCountry }) => {
    const [sellerState, setSellerState] = useState([])
    const [countryState, setCountryState] = useState([])
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (filterBySeller) {
            const { value, checked } = e.target;
            if (!checked) {
                setSellerState(sellerState.filter((e) => e !== value))
                return;
            }
            setSellerState([...sellerState, value])
        } else if (filterByCountry) {
            const { value, checked } = e.target;
            if (!checked) {
                setCountryState(countryState.filter((e) => e !== value))
                return;
            }
            setCountryState([...countryState, value])
        }
    }

    useEffect(() => {
        if (filterBySeller) {
            if (sellerState.length) {
                dispatch(addSellerFilter(sellerState))
            } else {
                dispatch(removeSellerFilter(goodsCategory));
            }
        } else if (filterByCountry) {
            if (countryState.length) {
                dispatch(addCountryFilter(countryState))
            } else {
                dispatch(removeCountryFilter(goodsCategory));
            }
        }
    }, [sellerState, countryState])

    return (
        <>
            {category.map((item, index) => {
                return (
                    <div className="column" key={index}>
                        <input
                            className='checkbox'
                            type="checkbox"
                            value={item}
                            onChange={handleChange}
                        />
                        <label>{item}</label>
                    </div>
                )
            })}
        </>
    )
}


export default CheckBox;