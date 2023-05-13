const { gql } = require('apollo-server-express');
const User = require('./User');

const typeDefs = gql` // wrap the typeDefs in a gql tagged template literal
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    typs Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input SavedBookInput {
        authors: [String]
        description: String
        title: String
        bookId: ID
        image: String
        link: String
    }
`;

module.exports = { User, typeDefs };
