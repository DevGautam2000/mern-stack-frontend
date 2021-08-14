import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction, deleteFromCartAction } from "../actions/cartActions";

function CartScreen() {
  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.cartItems;

  const dispatch = useDispatch();

  let subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ textAlign: "center", margin: "30px 0" }}>My Cart</h2>

          {cartItems.map((item) => {
            const { name, varient, quantity, prices, image, _id } = item;
            return (
              <div
                className="flex-container "
                key={_id}
                style={{
                  margin: 30,
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "0 2px 10px #eee",
                  padding: "20px",
                  borderRadius: 10,
                }}
              >
                {console.log(_id)}
                <div style={{ flex: 0.9 }}>
                  <h1>
                    {name}[{varient}]
                  </h1>
                  <h1>Price: Rs. {quantity * prices[0][varient]}</h1>
                  <h2
                    style={{
                      height: "45px",
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Quantity:{" "}
                    <span
                      style={{
                        color: "red",
                        fontSize: 20,
                        fontWeight: "bold",
                        cursor: "pointer",
                        background: "#eee",
                        padding: 5,
                        borderRadius: "50%",
                        height: "25px",
                        width: "25px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "10px",
                      }}
                      onClick={() => {
                        dispatch(
                          addToCartAction(
                            item,
                            quantity === 1 ? quantity : quantity - Number(1),
                            varient
                          )
                        );
                      }}
                    >
                      -
                    </span>{" "}
                    <b style={{ margin: 10 }}>{quantity}</b>{" "}
                    <span
                      style={{
                        color: "green",
                        fontSize: 20,
                        fontWeight: "bold",
                        cursor: "pointer",
                        background: "#eee",
                        padding: 5,
                        borderRadius: "50%",
                        height: "25px",
                        width: "25px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => {
                        dispatch(
                          addToCartAction(
                            item,
                            quantity >= 10 ? quantity : quantity + Number(1),
                            varient
                          )
                        );
                      }}
                    >
                      +
                    </span>
                  </h2>
                </div>
                <div>
                  <img
                    src={image}
                    alt={name}
                    width="150"
                    height="150"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div
                  style={{
                    color: "red",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: "auto",
                    marginLeft: "auto",
                    cursor: "pointer",
                    background: "#eee",
                    padding: 5,
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    dispatch(deleteFromCartAction(item));
                  }}
                >
                  X
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4">
          <h2 style={{ margin: 30, textAlign: "right" }}>
            Sub Total: Rs. {subtotal} /-
          </h2>
          <div style={{ textAlign: "right", margin: "0 30px" }}>
            <Button type="primary">Check out</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
