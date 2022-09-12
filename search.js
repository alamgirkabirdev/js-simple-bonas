const products = [
    {name: 'iphone 14', price: 35000},
    {name: 'samsung galaxy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenovo laptop yoga', price: 55000},
    {name: 'Asus afsus laptop', price: 61000},
    {name: 'smart watch samsung', price: 3500},
    {name: 'apple watch', price: 5000},
    {name: 'plus one phone 4', price: 25000},
]

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
        
    }
    return result;
}
const matched = searchProducts(products, 'phone');
console.log(matched);

// {(Alhadulillah)}