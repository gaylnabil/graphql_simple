const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql `

  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "MainCard" type defines the queryable fields for every book in our data source.
  
  type MainCard {
    title: String
    image: String
  }

  type Category {
    id: ID!
    name: String!
    image: String!    
    slug: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: Float!
    description: [String]!
    slug: String!
    stock: Int!
    onSales: Boolean
    category: Category!
  }
  
  type Mutation{

    addProduct(
      image: String!
      title: String!
      rating: Float
      price: Float!
      description: [String]!
      slug: String!
      stock: Int!
      onSales: Boolean
      category: Int
      ): Product

      searchProduct(id: ID!): Int!
      removeProduct(id: ID!): Boolean

      updateProduct(id: ID): Product
    
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    mainCards: [MainCard]
    products: [Product!]!
    categories: [Category!]!
    getProduct(slug: String!): Product
    getCategory(slug: String!): Category
  }

`;

module.exports = typeDefs