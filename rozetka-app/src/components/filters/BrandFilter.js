const BrandFilter = ({ item }) => {

    const handleChange = (e) => {
      
    }

    return (
        <div className="column">
            <input 
            type="checkbox" 
            name="name"
            value={item} 
            className='checkbox' 
            onChange={(e) => handleChange(e)}/>
            <label>{item}</label>
        </div>
    )
}


export default BrandFilter;