import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";

const MainContainer = ({ goods, sortProducts }) => {
    let newArr = []
    let allPrice = goods.map((el) => {
        newArr.push(el.price)
    })
    let maxPrice = Math.max(...newArr)

    return (
        <>
            <div className="category-name">
                <p>Монітори</p>
            </div>
            <div className="sort-section-container">
                <Sort goods={goods} />
            </div>

            <div className="section-center">
                <div className="sidebar-container">
                    <Sidebar goods={goods} maxPrice={maxPrice}/>
                </div>
                <div className="products-container">
                    <Products goods={goods} sortProducts={sortProducts} />
                </div>
            </div>
        </>
    )
}


export default MainContainer;