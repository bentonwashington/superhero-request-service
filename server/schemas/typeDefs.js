const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Request {
        _id: ID
        title: String
        description: String
        details: String
        category: Category
    }

    type Category {
        _id: ID
        categoryName: String
    }

    type Query {
        requests: [Request]
        categories: [Category]
        request(id: ID!): Request
        category(id: ID!): Category
    }

    type Mutation {
        addRequest(title: String!, description: String!, details: String!, category: Category!): Request
        updateRequest(description: String! details: String!): Request
        deleteRequest(id: ID!): Request
    }
`;

module.exports = typeDefs;