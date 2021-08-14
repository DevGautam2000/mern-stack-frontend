import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  pizza: getAllPizzaReducer,
  cart: cartReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: {
    cartItems: cartItems,
  },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
