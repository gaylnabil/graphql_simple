// const { mainCards, categories, products } = require('./../database')
const Query = {
    products: (parent, args, context) => context.products,
    mainCards: (parent, args, context) => context.mainCards,
    getProduct: (parent, args, context) => {
        let product = context.products.find((prod) => {
            return prod.slug === args.slug;
        });
        //console.log(product);
        return product;
    },

    categories: () => categories,
    getCategory: (parent, args, context) => {
        console.log(args, context);
        let category = context.categories.find((cat) => { return cat.slug === args.slug; });
        return category;
    },

}

module.exports = Query