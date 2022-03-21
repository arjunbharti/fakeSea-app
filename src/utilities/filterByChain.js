export const filterByChain = (products, chain) => {
    let filteredData = [];
    for(let i in chain){
        if(chain[i]){
            const result = products.filter((item) => item.chain === i);
            filteredData.unshift(...result);
        }
    }
    return filteredData.length === 0 ? products : filteredData;
}
