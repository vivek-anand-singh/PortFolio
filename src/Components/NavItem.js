import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ name, children, selectedLink, changeLink, href }) => {
    let className = "nav-item";
    if (selectedLink === children.toLowerCase()) {
        className += " w-full";
    }

    const clickHandler = () => {
      console.log("clicked");
        changeLink(children.toLowerCase());
    }
  
    return (
    // <li onClick={clickHandler} className={className}>
    //   <Link to={href} onClick={clickHandler}>
    //             {children}
    //         </Link>
    //   {children}
    // </li>
    // <li onClick={clickHandler} className={className}>
    //     <Link to={href} onClick={clickHandler}>
    //         {children}
    //     </Link>
    // </li>
    // <Link to={href} onClick={clickHandler} className={className}>
    //     {children}
    // </Link>
    // <li onClick={clickHandler} className={className}>
    //   {children}
    // </li>
      <li onClick={clickHandler} className={className}>
        <Link to={href}>{children}</Link>
      </li>
  );
};

export default NavItem;