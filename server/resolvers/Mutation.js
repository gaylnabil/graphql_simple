const UUID = require('uuid-int');
// const { products } = require('./Query');

const id = 256
const generator = UUID(id);

const Mutation = {

    addProduct: (parent, {
        image,
        title,
        rating,
        price,
        description,
        slug,
        stock,
        onSales,
        category
    }, context) => {
        let newProduct = {
            id: generator.uuid(),
            image,
            title,
            rating,
            price,
            description,
            slug,
            stock,
            onSales,
            category
        }
        context.products.push(newProduct);
        console.log(newProduct);
        return newProduct;

    },

    removeProduct: (parent, args, context) => {
        let index = Mutation.searchProduct(parent, args, context);

        console.log("index : ", index, "; product.id : ", parseInt(args.id), "; Type : ", typeof parseInt(args.id));

        if (index < 0)
            return false;

        context.products.splice(index, 1);
        return true;
    },

    searchProduct: (parent, args, context) => {
        let index = context.products.findIndex(product => {
            return product.id === parseInt(args.id);
        });
        console.log("index : ", index, "; product.id : ", parseInt(args.id), "; Type : ", typeof parseInt(args.id));
        return index;
    },



    updateProduct: (parent, args, context) => {
        let index = context.products.findIndex(product => {
            return product.id === parseInt(args.id);
        });
        let product = context.products[index];
        product[index].title = "Apple AirPods (3nd Generation)";
    }
}

module.exports = Mutation




// mutation{
//   addProduct(image: "Apple_AirPods", title: "Apple AirPods (2nd Generation)", price: 55.99, description: 
//   ["Quick access to Siri by saying “ Hey Siri ”", 
//   "More than 24 hours total listening time with the Charging Case","Effortless setup, in-ear detection, and automatic switching for a magical experience", 
//   "Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV"], slug: "apple_Airpods_2", stock: 85, onSales: true, category: 14) {
//     id
//     title
//     image
//     description
//     price
//     stock
//     slug
//   }
// }