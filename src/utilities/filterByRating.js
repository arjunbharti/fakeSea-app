export const filterByRating = (products, rating) => {
    if(rating){
        return products.filter((item) => item.rating <= rating);
    }
    return products;
}