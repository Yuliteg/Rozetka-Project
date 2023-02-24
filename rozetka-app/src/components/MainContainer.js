import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";

const MainContainer = ({ goods }) => {
    let allPrice = goods.map((el) => el.price)
    let maxPrice = Math.max(...allPrice)

    return (
        <>
            <div className="category-name">
                <p>Монітори</p>
            </div>
            <div className="sort-section-container">
                <Sort />
            </div>
            <div className="section-center">
                <div className="sidebar-container">
                    <Sidebar goods={goods} maxPrice={maxPrice} />
                </div>
                <div className="products-container">
                    <Products goods={goods} />
                </div>
            </div>
        </>
    )
}


export default MainContainer;