import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/cartActions";

function Pizza({ name, image, varients, prices, description, _id }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState(varients[0]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const pizza = {
    name: name,
    _id: _id,
    image: image,
    prices: prices,
  };

  const addToCart = () => {
    dispatch(addToCartAction(pizza, quantity, varient));
  };

  const styleSheet = {
    displayStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ ...styleSheet.displayStyle, flexDirection: "column" }}
        >
          <img
            src={image}
            alt={image}
            className="img-fluid"
            onClick={handleShow}
            style={{
              cursor: "pointer",
              width: "60%",
              marginBottom: "10px",
            }}
          />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "80px 50px",
          padding: "20px",
          borderRadius: 10,
          minHeight: "80%",
          maxWidth: "90%",
        }}
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <h1
          style={{
            marginBottom: 20,
          }}
        >
          {name}
        </h1>
        <img
          src={image}
          alt={image}
          className="img-fluid"
          height="200"
          width="200"
          onClick={handleShow}
          style={{ cursor: "pointer" }}
        />
        <div
          className="wrapper w-100 "
          style={{
            padding: "0 20px",
            margin: 20,
            flexDirection: "column",
            height: "40%",
            ...styleSheet.displayStyle,
          }}
        >
          <div
            className="varient_and_quantity w-100"
            style={styleSheet.displayStyle}
          >
            <div className="w-100 m-1" style={{ textAlign: "center" }}>
              <p>Varients</p>
            </div>
            <div className="w-100 m-1" style={{ textAlign: "center" }}>
              <p>Quantity</p>
            </div>
          </div>

          <div
            className="selects w-100"
            style={{ ...styleSheet.displayStyle, marginBottom: "10px" }}
          >
            <select
              className="form-control m-1"
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
            >
              {varients.map((_varient, index) => (
                <option value={_varient} key={index}>
                  {_varient}
                </option>
              ))}
            </select>
            <select
              className="form-control m-1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((key) => (
                <option value={key + 1} key={key}>
                  {key + 1}
                </option>
              ))}
            </select>
          </div>

          <div
            className="price_and_add_to_cart w-100 p-3"
            style={styleSheet.displayStyle}
          >
            <div style={{ whiteSpace: "nowrap" }} className="price">
              Price: {"Rs. "}
              {prices[0][varient] * quantity}
            </div>
            <div className="btn_div">
              <Button
                type="primary"
                style={{ whiteSpace: "nowrap" }}
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pizza;
