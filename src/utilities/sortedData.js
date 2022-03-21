export function getSortedProducts(products, sortBy) {
    if(sortBy === "lowToHigh") 
        return products.sort((a,b) => a.price - b.price);
    if(sortBy === "highToLow") 
        return products.sort((a,b) => b.price - a.price);
    return products;
}