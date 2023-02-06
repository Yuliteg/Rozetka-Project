import { useDispatch } from "react-redux";
import { addCountryFilter, removeCountryFilter } from "../../store/slices/filtersGoodsSlice";

const CountryFilter = ({ item, byCountry }) => {
    const dispatch = useDispatch();
    
      const handleChange = (e) => {
      const name = e.target.name;
      const isChecked = e.target.checked;
     
      if(!isChecked) {
       dispatch(removeCountryFilter(name));
       return;
      }
      dispatch(addCountryFilter(name))
    }


    return (
        <div className="column">
            <input
                className='checkbox'
                type="checkbox"
                name={item} 
                onChange={handleChange}
                checked={byCountry === item}
                />
                
            <label>{item}</label>
        </div>
    )
}


export default CountryFilter;