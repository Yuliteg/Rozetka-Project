import { useDispatch, useSelector } from "react-redux";
import { addCheckboxFilter, removeCheckboxFilter } from "../../store/slices/goodsSlice";
import { useEffect, useState } from "react";
import { getUniqueValues } from "../../helpersFunction/uniqueValues";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const CheckBox = ({ goods, category, filterType, checkboxWithInput }) => {
    const [filterOptions, setFilterOptions] = useState([])
    const [searchingInputValue, setSearchingInputValue] = useState([]);
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
            dispatch(addCheckboxFilter({ filterType, value }));
        } else {
            dispatch(removeCheckboxFilter({ filterType, value }));
        }
    };

    const handleSearchingChange = (e) => {
        let input = e.target.value;
        setSearchingInputValue(input.toLowerCase());
    }

    const filteredOptions = filterOptions.filter(item =>
        item.toLowerCase().includes(searchingInputValue)
    );

    return (
        <>
            {checkboxWithInput ? (
                <InputGroup className='input-brand-search'>
                    <Form.Control
                        placeholder="Пошук"
                        className="input-brand-control"
                        onChange={handleSearchingChange}
                    />
                </InputGroup>
            ) : null}
            {filteredOptions.map((item, index) => (
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