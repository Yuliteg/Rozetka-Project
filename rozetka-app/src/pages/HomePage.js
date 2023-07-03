import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Loading from "../components/Loading";
import MainContainer from "../components/MainContainer";
import { fetchGoods } from "../helpersFunction/getProd";

const HomePage = () => {
  const { goods, isLoading, isError } = useSelector(store => store.product);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGoods())
  }, [dispatch])

  return (
    <Wrapper>
      {isLoading && <Loading />}
      {isError && <h2 style={{ color: "red", textAlign: "center" }}>Something went wrong</h2>}
      {goods && <MainContainer />}
    </Wrapper>
  )
}


export default HomePage

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.3rem;
   margin-right: 2rem;
   margin-top: 2.5rem;
   margin-bottom: 2rem;

   .category-name {
    margin-left: 2rem;
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
    border-bottom: 1px solid #e9e9e9;
     }
   }

   .error {
    text-align: center;
    color: red;
   }
  `