import { useDispatch } from "react-redux";
import { addSellerFilter, removeSellerFilter } from "../../store/slices/goodsSlice";
import { useEffect, useState } from "react";

const SellerFilter = ({ seller, goodsCategory }) => {
    const [chechedValues, setCheckedValues] = useState([])
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckedValues([...chechedValues, value])
        } else {
            setCheckedValues(chechedValues.filter(e => e !== value))
        }
    }

    useEffect(() => {
        if(chechedValues.length) {
            dispatch(addSellerFilter(chechedValues))
        } else {
            dispatch(removeSellerFilter(goodsCategory))
        }
    }, [chechedValues])

    return (
        <>
            {seller.map((item, index) => {
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


export default SellerFilter;