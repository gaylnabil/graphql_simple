//  const { categories } = require('./../database')

const Product = {
    category: (parent, args, context) => {
        console.log("Product_Category: ", parent, args, context);
        let result = context.categories.find((cat) => { return cat.id === parent.category; });
        return result;
    },
}

module.exports = Product