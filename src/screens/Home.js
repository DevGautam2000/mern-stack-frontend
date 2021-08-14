import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../components/Pizza";

function Home() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.pizza);

  const { pizza, error, loading } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1 style={{ textAlign: "center", marginTop: 20 }}>Loading...</h1>
        ) : error ? (
          <h1 style={{ textAlign: "center", marginTop: 20 }}>
            Something went wrong...
          </h1>
        ) : (
          pizza.map((pizza, index) => (
            <div className="col-md-4" key={index}>
              <Pizza {...pizza} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
