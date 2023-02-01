import { getUniqueValues } from '../helpersFunction/UniqueValues';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CheckboxEl = ({ goods }) => {

    const categories = getUniqueValues(goods, 'seller');
    const brand = getUniqueValues(goods, 'brand');
    const country = getUniqueValues(goods, 'country');


    return (
        <>
            <div className="seller-container checkbox-group">
                <p className='input-name'>Продавець</p>
                {categories.map((item, index) => {
                    return (
                        <div key={index} className="column">
                            <input type="checkbox" name="name" value="value" className='checkbox' />
                            <label>{item}</label>
                        </div>
                    )
                })}
            </div>

            <div className="brand-container checkbox-group">
                <p className='input-name'>Бренд</p>
                <InputGroup className='input-brand-search'>
                    <Form.Control
                        placeholder="Пошук"
                        className="input-brand-control"/>
                </InputGroup>

                {brand.map((item, index) => {
                    return (
                        <div key={index} className="column">
                            <input type="checkbox" name="name" value="value" className='checkbox' />
                            <label>{item}</label>
                        </div>
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
        </>
    )
}


export default CheckboxEl