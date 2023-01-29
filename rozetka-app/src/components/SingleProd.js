import { TiShoppingCart } from "react-icons/ti";
import {AiFillStar} from "react-icons/ai";

const SingleProd = ({ goods }) => {

  return (
    <>
      {goods.map((item) => {
        const { id, name, img, price, rate, status } = item;
        return (
          <div className="product-container" key={id}>
            <img src={img} alt="prod-img" />
            <header>
              <h4>{name}</h4>
              <p>Рейтинг {rate}<AiFillStar className="star" /></p>
            </header>
            <footer>
              <p className="price">{price}<span>₴</span></p>
              <button className="add-to-basket-btn"><TiShoppingCart /></button>
            </footer>
            <p className="status">{status}</p>
          </div>
        )
      })}
    </>
  )
}


export default SingleProd;