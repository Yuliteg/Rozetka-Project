import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";

const MainContainer = () => {

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
                    <Sidebar />
                </div>
                <div className="products-container">
                    <Products />
                </div>
            </div>
        </>
    )
}


export default MainContainer;