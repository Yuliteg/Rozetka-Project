import { useDispatch } from "react-redux";
import { addBrandFilter, removeBrandFilter } from "../../store/slices/filtersGoodsSlice";

const BrandFilter = ({ item, byBrand }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const isChecked = e.target.checked;

        if (!isChecked) {
            dispatch(removeBrandFilter(name));
            return;
        }
        dispatch(addBrandFilter(name))
    }


    return (
        <div className="column">
            <input
                type="checkbox"
                name={item}
                className='checkbox'
                onChange={handleChange}
                checked={byBrand === item}
            />
            <label>{item}</label>
        </div>
    )
}


export default BrandFilter;