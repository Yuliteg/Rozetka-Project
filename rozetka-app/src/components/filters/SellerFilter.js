import { useDispatch } from "react-redux";
import { addSellerFilter, removeSellerFilter } from "../../store/slices/filtersGoodsSlice";

const SellerFilter = ({ item, bySeller }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
      const name = e.target.name;
      const isChecked = e.target.checked;

      if(!isChecked) {
       dispatch(removeSellerFilter(name));
       return;
      }
      dispatch(addSellerFilter(name))
    }

    return (
        <div className="column">
            <input
                className='checkbox'
                type="checkbox"
                name={item} 
                onChange={handleChange}
                checked={bySeller === item}
                />
                
            <label>{item}</label>
        </div>
    )
}


export default SellerFilter;