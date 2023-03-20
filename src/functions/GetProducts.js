export async function getProductCategories(setProductCategory){
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = await response.json();
    setProductCategory(data)
} 
export async function getProductList(setProductList,categories){
    const response= await fetch(`https://fakestoreapi.com/products/category/${categories}`)
    const data= await response.json();
    setProductList(data)
}
