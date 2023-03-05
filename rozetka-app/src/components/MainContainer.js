import { useState } from "react";
import { useSelector } from "react-redux";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";

const MainContainer = ({ goods }) => {
    const [sellerState, setSellerState] = useState([])
    const [countryState, setCountryState] = useState([])
    let allPrice = goods.map((el) => el.price)
    let maxPrice = Math.max(...allPrice)

    const product = useSelector(store => store.product);

    const { bySeller, byCountry } = product;

    return (
        <>
            <div className="category-name">
                <p>Монітори</p>
            </div>
            <div className="sort-section-container">
                <Sort bySeller={bySeller} byCountry={byCountry}/>
            </div>
            <div className="section-center">
                <div className="sidebar-container">
                    <Sidebar
                        goods={goods}
                        maxPrice={maxPrice}
                    />
                </div>
                <div className="products-container">
                    <Products goods={goods} />
                </div>
            </div>
        </>
    )
}


export default MainContainer;