import styled from "styled-components";
import { ThreeBars } from "@styled-icons/octicons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import rozetkaLogo from "../image/rozetka.logo.svg";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div className="nav-center">
          <div className="header">
            <ThreeBars className="burger-icon" />
            <img src={rozetkaLogo} alt="logotype" className="my-logo" />
            <div className="header-catalog">
              <button className="header-catalog-button">Каталог</button>
            </div>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Я шукаю..." />
              <Button
                variant="success"
                id="button-addon2"
                style={{ backgroundColor: "#02893d" }}
              >
                Найти
              </Button>
            </InputGroup>
            <div className="icon-user-basket">
              <div>
                <TiShoppingCart className="basket-icon" />
              </div>
              <div>
                <FaUserAlt className="user-icon" />
              </div>
            </div>
          </div>
        </div>
      </NavContainer>
    </>
  );
};

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

      .icon-user-basket {
        width: 8%;
        margin-left: 10%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      .basket-icon {
        color: white;
        width: 26px;
        height: 26px;
        fill: #fff;
      }

      .user-icon {
        color: white;
        width: 23px;
        height: 23px;
        fill: #fff;

        @media (max-width: 768px) {
          display: none;
        }
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
      }
    }
  }
`;

export default Navbar;
