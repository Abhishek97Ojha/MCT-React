const productsData = [];

//Fetching product details from api
const productDataFromApi = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return productsData.push(...data);
};
productDataFromApi();
console.log(productsData);
const initialState = {
  productsData,
};

//Reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_DATA":
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default productReducer;
