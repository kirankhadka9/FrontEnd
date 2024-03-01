import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContext } from "../MyApp";

const ReactLink = () => {
  let { token, setTOken } = useContext(GlobalVariableContext);

  return (
    <div>
      <NavLink
        to="/admin/products"
        style={{ marginLeft: "60vh", marginRight: "80vh" }}
      >
        Products
      </NavLink>

      {token ? (
        <>
          <NavLink
            to="/admin/products/create"
            style={{ marginLeft: "34vh", marginRight: "20px" }}
          >
            Create Products
          </NavLink>
          <NavLink to="/admin/my-profile" style={{ marginRight: "20px" }}>
            My Profile
          </NavLink>
          <NavLink to="/admin/update-password" style={{ marginRight: "20px" }}>
            Update password
          </NavLink>
          <NavLink to="/admin/logout" style={{ marginRight: "20px" }}>
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/admin/sign-up" style={{ marginRight: "20px" }}>
            <button> SignUp</button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default ReactLink;