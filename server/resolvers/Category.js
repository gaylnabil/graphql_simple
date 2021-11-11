// const { products } = require('./../database')

const Category = {
    products: (parent, args, context) => {
        console.log("Category_with_all_products: ", parent, args, context);
        let result = context.products.filter((product) => { return product.category === parent.id; });
        return result;
    },
}


module.exports = Category