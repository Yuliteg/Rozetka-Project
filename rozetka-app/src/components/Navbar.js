import styled from 'styled-components';
import { ThreeBars } from '@styled-icons/octicons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faUser, faBasketShopping)


const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div className="nav-center">
          <div className="header">
            <ThreeBars className='burger-icon' />
            <img src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg" alt="logotype" className='my-logo' />
            <div className='header-catalog'>
              <button className='header-catalog-button'>Каталог</button>
            </div>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Я шукаю..."
              />
              <Button variant="success" id="button-addon2" className='header-btn'>
                Найти
              </Button>
            </InputGroup>
              <div className="icon-user-basket">
              <FontAwesomeIcon icon="fa-user" />
              <FontAwesomeIcon icon="fa-basket-shopping" className='basket'/>
              </div>
          </div>
        </div>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
   background-color: #221f1f;
   height: 4rem;
   display: flex;
   align-items: center;
   justify-content: center;

   .nav-center {
    width: 95vw;
    margin: 0 auto;
    max-width: 100vw;

    .header {
    display: flex;
    align-items: center;

    .burger-icon {
    color: white;
    width: 24px;
    height: 24px;
    fill: #fff;
    }

    .my-logo {
      width: 240px;
      height: auto;
      margin-left: 3%;

      @media (max-width: 768px) {
      display: none;
      }
     }

     .header-catalog {
      margin-left: 3%;
     
      .header-catalog-button {
       height: 40px;
       margin: 0;
       padding-left: 16px;
       padding-right: 16px;
       text-align: center;
       font-size: 16px;
       border: none;
       border-radius: 4px;
       background-color: #fff3;
       color: #fff;
      }
     }

     .mb-3 {
      margin-bottom: 0 !important;
      width: 45%;
      margin-left: 3rem;
       .form-control {
        border-radius: 0.2rem;
       }
       .header-btn {
        background-color: #00a046;
       }
     }

    .icon-user-basket {
      margin-left: 10%;
      display: flex;
      gap: 70%;


      .fa-user {
       color: white;
       font-size: 21px;

       @media (max-width: 1200px) {
       display: none;
       }
      }

      .basket {
        color: white;
        font-size: 20px;
      }
     }
    }
   }
  `


export default Navbar