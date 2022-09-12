const products = [
    {name: 'iphone 14', price: 35000},
    {name: 'samsung galaxy 14', price: 600000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenovo laptop yoga', price: 55000},
    {name: 'Asus afsus laptop', price: 61000},
    {name: 'smart watch samsung', price: 3500},
    {name: 'apple watch', price: 500},
    {name: 'plus one phone 4', price: 25000},
];

// for(const product of products){
//     if(product.price<5000){
//         break;
//     }
//     console.log(product);
// }

for(const product of products){
    if(product.price<10000){
        continue;
    }
    console.log(product);
}
console.log('after the loop');
