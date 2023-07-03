import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter } from "../../store/slices/goodsSlice";
import { useEffect, useState } from "react";
import { getUniqueValues } from "../../helpersFunction/uniqueValues";

const CheckBox = ({ goods, category, filterType }) => {
    const [filterOptions, setFilterOptions] = useState([])
    const activeFilters = useSelector((state) => state.product.filters[filterType]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (goods.length > 0) {
            setFilterOptions(getUniqueValues(goods, filterType))
        }
    }, [goods, filterType])

    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            dispatch(addFilter({ filterType, value }));
        } else {
            dispatch(removeFilter({ filterType, value }));
        }
    };

    return (
        <>
            {filterOptions.map((item, index) => (
                <div className="column" key={index}>
                    <input
                        className='checkbox'
                        type="checkbox"
                        value={item}
                        onChange={handleChange}
                        checked={activeFilters.includes(item)}
                    />
                    <label>{item}</label>
                </div>
            ))}
        </>
    )
}

export default CheckBox;