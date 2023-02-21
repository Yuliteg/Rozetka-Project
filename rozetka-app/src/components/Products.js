import styled from 'styled-components';
import SingleProd from "./SingleProd";


const Products = ({ goods, sortProducts }) => {
  return (
    <>
      <Wrapper> 
        {sortProducts().map(el => (
          <SingleProd 
           key={el.id}
           item={el} 
          />
        ))}
      </Wrapper>
    </>
  )
}


export default Products

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

   .product-container {
   width: 100%;
   padding-left: 2rem;
   padding-right: 2rem;
   padding-top: 2rem;
   padding-bottom: 0.5rem;
   border-bottom: 1px solid #e9e9e9;
   border-right: 1px solid #e9e9e9;

    img {
  width: 100%;
  height: 200px;
  object-fit: contain;
    }

  header {
  margin: 0.5rem 0 0.5rem 0;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    gap: 0.1rem;
  }

   .star {
    font-size: 20px;
    color: orange;
   }
  }

  footer {
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .add-to-basket-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-bottom: 9%;
    border: none;
    background-color: #fff;
    border-radius: 4px;
     svg {
      fill: #00a046;
      font-size: 27px;
     }
  }

 .price {
    font-size: 24px;
    span {
      padding-left: 0.3rem;
    }
     }
      }

  .status {
    margin: 0;
    font-size: 13px;
    color: #00a046;
  }
     }

    @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
   }

   @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
