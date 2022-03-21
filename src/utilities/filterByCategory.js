export const filterByCategory = (products, category) => {
    let filteredData = [];
    for(let i in category){
        if(category[i]){
            const result = products.filter((item) => item.categoryName === i);
            filteredData.unshift(...result);
        }
    }
    return filteredData.length === 0 ? products : filteredData;
}
