# GraphQL Sample

A GraphQL API built with Apollo Server demonstrating queries, mutations, and nested resolvers using a Books and Authors dataset.

## What This Covers

- Defining a GraphQL schema with `typeDefs`
- Writing resolvers for queries and mutations
- Handling nested relationships (Book → Author, Author → Books)
- Running an Apollo Server standalone instance

## Schema

```graphql
type Author {
  id: ID!
  name: String!
  books: [Book]
}

type Book {
  id: ID!
  title: String!
  publishedYear: Int
  author: Author
}

type Query {
  authors: [Author]
  books: [Book]
}

type Mutation {
  addAuthor(name: String!): Author
  addBook(title: String!, publishedYear: Int, authorId: ID!): Book
}
```

## Setup & Run

```bash
npm install
node index.js
```

Server starts at `http://localhost:4000`

## Sample Queries

**Get all books with author details:**
```graphql
query {
  books {
    id
    title
    publishedYear
    author {
      name
    }
  }
}
```

**Get all authors with their books:**
```graphql
query {
  authors {
    id
    name
    books {
      title
    }
  }
}
```

**Add a new author:**
```graphql
mutation {
  addAuthor(name: "Author 3") {
    id
    name
  }
}
```

**Add a new book:**
```graphql
mutation {
  addBook(title: "New Book", publishedYear: 2024, authorId: "1") {
    id
    title
  }
}
```

## Tech Stack

- Node.js
- Apollo Server
- GraphQL
