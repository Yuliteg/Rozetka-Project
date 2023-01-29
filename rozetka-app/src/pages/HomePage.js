import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import styled from 'styled-components';

const HomePage = () => {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="category-name">
        <p>Монітори</p>
      </div>
       <div className="sort-section-container">
          <Sort />
       </div>

      <div className="section-center">
        <div className="sidebar-container">
          <Sidebar goods={goods}/>
        </div>

        <div className="products-container">
          <Products goods={goods}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.3rem;
   margin-left: 2rem;
   margin-right: 2rem;
   margin-top: 2.5rem;

   .category-name {
    font-size: 36px;
    line-height: 42px;
   }

   .section-center {
    display: flex;
    flex: 1;

    .filter-container {
    width: 20%;
    border-top: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
     }
     
     .products-container {
    width: 80%;
    border-top: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
     }
   }
  `