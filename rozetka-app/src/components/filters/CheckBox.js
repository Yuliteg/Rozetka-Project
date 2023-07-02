import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter } from "../../store/slices/goodsSlice";
import { useEffect, useState } from "react";
import { getUniqueValues } from "../../helpersFunction/uniqueValues";

const CheckBox = ({ goods, category, filterType }) => {
    const [filterOptions, setFilterOptions] = useState([])
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();
    const filteredGoods = useSelector((state) => state.product.filteredGoods)

    useEffect(() => {
        if (goods || Array.isArray(goods)) {
            setFilterOptions(getUniqueValues(goods, filterType))
        }
    }, [goods])

    const activeFilters = useSelector((state) => state.product.filters[filterType]);

    const handleChange = (e) => {
        const { value, checked } = e.target;
        console.log(checked);
        if (checked) {
            dispatch(addFilter({ filterType, value }));
        } else {
            dispatch(removeFilter({ filterType, value }));
        }
    };

    // const handleInput = (e) => {
    //     setInputValue(e.target.value.toLowerCase());
    // };
    // const filterCategories = () => {
    //     if (inputValue) {
    //         return category.filter((el) => el.toLowerCase().includes(inputValue));
    //     }
    //     return category;
    // };

    return (
        <>
            {filterOptions && filterOptions.map((item, index) => (
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