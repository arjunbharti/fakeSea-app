export const getFilteredData = (products, trending) => products.filter((item) => (trending ? item.trending === true : item))
