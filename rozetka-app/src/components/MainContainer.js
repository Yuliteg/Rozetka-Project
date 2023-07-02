import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";

const MainContainer = () => {
    const product = useSelector(store => store.product);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const { bySeller, byCountry, goods } = product;

    return (
        <>
            <div className="category-name">
                <p>Монітори</p>
            </div>
            <div className="sort-section-container">
                <Sort
                    bySeller={bySeller}
                    byCountry={byCountry} />
            </div>
            <div className="section-center">
                <div className="sidebar-container">
                    <Sidebar
                        goods={goods}
                        min={min}
                        max={max}
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