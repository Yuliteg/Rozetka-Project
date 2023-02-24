import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Loading from "../components/Loading";
import MainContainer from "../components/MainContainer";
import { getGoods } from "../helpersFunction/getGoods";

const HomePage = () => {
  const { goods, isLoading, isError } = useSelector(store => store.product);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoods())
  }, [])

//   const sortProducts = () => {
//     let sortedProducts = goods;
//     if (sort) {         
//        sortedProducts = sortedProducts.slice().sort((a,b) => {
//           if(sort === 'price-lowest') {
//             return a.price - b.price;
//           } else if(sort === 'price-highests') {
//             return b.price - a.price;
//           } else if(sort === 'price-rating') {
//             return b.rate - a.rate;
//           }
//           return sortedProducts;
//     });
//    }
//    if(bySeller) {
//     sortedProducts = sortedProducts.filter(item => item.seller === bySeller);
//    }
//    if(byCountry) {
//     sortedProducts = sortedProducts.filter(item => item.country === byCountry);
//    }
//    if(byBrand) {
//     sortedProducts = sortedProducts.filter(item => item.brand === byBrand);
//    }
//    if(price !== []) {
//     sortedProducts = sortedProducts.filter(item => item.price > price[0] && item.price <= price[1]);
//    }

//     return sortedProducts;
//  }

  return (
   <Wrapper>
       {isLoading && <Loading />}
       {isError && <h2 style={{color: "red", textAlign: "center"}}>Something went wrong</h2>}
       {goods && <MainContainer goods={goods}/>}
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