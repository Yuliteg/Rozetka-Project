import Sort from "../components/Sort";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { useEffect } from "react";
import { getGoods } from "../store/slices/filtersGoodsSlice";
import Loading from "../components/Loading";
import MainContainer from "../components/MainContainer";


const HomePage = ({goods, isLoading, isError}) => {

  const { sort } = useSelector(store => store.product);

  const sortProducts = () => {
    let sortedProducts = goods;
    if (sort) {         
       sortedProducts = sortedProducts.slice().sort((a,b) => {
          if(sort === 'price-lowest') {
            return a.price - b.price;
          } else if(sort === 'price-highests') {
            return b.price - a.price;
          } else if(sort === 'price-rating') {
            return b.rate - a.rate;
          }
    });
   }
    return sortedProducts;
 }

  return (
   <Wrapper>
       {isLoading && <Loading />}
       {isError && <h2 style={{color: "red", textAlign: "center"}}>Something went wrong</h2>}
       {goods && <MainContainer goods={goods} sortProducts={sortProducts}/>}
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

    .sidebar-container {
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

   .error {
    text-align: center;
    color: red;
   }
  `