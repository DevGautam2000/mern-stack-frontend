import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

function NavComponent() {
  const cartState = useSelector((state) => state.cart);
  const { cartItems } = cartState;
  return (
    <Navbar
      className="shadow-lg bg-white rounded"
      style={{
        padding: "20px 40px",
      }}
    >
      <Navbar.Brand
        href="#home"
        style={{
          fontWeight: "bold",
        }}
      >
        Pizza App
      </Navbar.Brand>
      <Nav
        className="ml-auto"
        style={{
          position: "absolute",
          right: "40px",
        }}
      >
        <Nav.Link href="#home" className="mx-4">
          Login
        </Nav.Link>
        <Nav.Link href="/cart">
          Cart{" "}
          <span
            style={{
              background: "red",
              color: "white",
              height: "10px",
              width: "10px",
              padding: "2px 5px",
              borderRadius: "50%",
            }}
          >
            {cartItems.length}
          </span>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavComponent;
