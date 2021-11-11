const { ApolloServer } = require('apollo-server');
const { mainCards, categories, products } = require('./database')
const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const Category = require('./resolvers/Category')
const Product = require('./resolvers/Product')
const Mutation = require('./resolvers/Mutation')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Product,
        Category,
        Query,
        Mutation
    },
    context: {
        mainCards,
        categories,
        products
    }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});




// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
// const resolvers = {

//     Category: {
//         products: (parent, args, ctx) => {
//             console.log("Category_with_all_products: ", parent, args, ctx);
//             let result = products.filter((product) => { return product.category === parent.id; });
//             return result;
//         },
//     },

//     Product: {
//         category: (parent, args, ctx) => {
//             console.log("Producy_Category: ", parent, args, ctx);
//             let result = categories.find((cat) => { return cat.id === parent.category; });
//             return result;
//         },
//     }
// };