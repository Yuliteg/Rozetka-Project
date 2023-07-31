import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { BsFilter } from "react-icons/bs";

const MainContainer = () => {
  const [showButton, setShowButton] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  return (
    <>
      <div className="category-name">
        <p style={{ marginBottom: 0 }}>Монітори:</p>
      </div>
      <div className="sort-section-container">
        {showButton && (
          <Button
            variant="success"
            id="button-addon2"
            className="header-btn"
            style={{ backgroundColor: "#02893d" }}
            onClick={handleToggleSidebar}
          >
            Фільтрація <BsFilter />
          </Button>
        )}
        <Sort />
      </div>
      <div className="section-center">
        <SidebarToggle>
          <div
            className="sidebar-container"
            style={{ display: showSidebar && "block" }}
          >
            <Sidebar />
          </div>
        </SidebarToggle>
        <div className="products-container">
          <Products />
        </div>
      </div>
    </>
  );
};

export default MainContainer;

const SidebarToggle = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    // display: none;
  }
`;
