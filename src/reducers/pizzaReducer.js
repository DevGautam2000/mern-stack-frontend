export const getAllPizzaReducer = (state = { pizza: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        loading: false,
        pizza: action.payload,
      };
    case "GET_PIZZAS_FALIURE":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
