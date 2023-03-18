export async function getProductCategories(setCategories){
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = await response.json();
    setCategories(data)
}  