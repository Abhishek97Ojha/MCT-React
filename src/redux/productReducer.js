const productsData = [];
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

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DATA":
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default productReducer;
