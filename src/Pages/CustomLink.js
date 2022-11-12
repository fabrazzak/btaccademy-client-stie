import React from 'react';
import "./Header.css"
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
    
        <Link 
          style={{ 
            textDecoration: match ? "none" : "none" ,
            color: match ? "#14a800 " : "#333" ,
            fontSize: match ? "18px " : "18px" ,
            fontSize: match ? "18px " : "18px" ,
            marginLeft: match ? "40px " : "40px" ,
            fontWeight: match ? "700": " 500",

        }}


        to={to}
        {...props}

        >
          {children}
        </Link>
      
    );
  }
  

export default CustomLink;