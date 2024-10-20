import { iconsImgs } from "../../utils/images";
import "./Header.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { toggleSidebar }: any = useContext(SidebarContext);
  const location = useLocation();

  // Function to determine the title based on the current route
  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/order-management":
        return "Order Management";
      case "/customers":
        return "Customers";
      case "/coupon-code":
        return "Coupon Code";
      case "/categories":
        return "Categories";
      case "/transaction":
        return "Transaction";
      case "/brand":
        return "Brand";
      default:
        return "Dashboard"; // Default title
    }
  };

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.toggle} alt="toggle icon" />
        </button>
        <h3 className="content-top-title">{getTitle()}</h3>
      </div>
      <div className="content-top-btns">
        <button type="button" className="bell-btn content-top-btn">
          <img src={iconsImgs.bell} alt="bell icon" />
        </button>
        <div className="avatar"></div>
      </div>
    </div>
  );
};

export default Header;
