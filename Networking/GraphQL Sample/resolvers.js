const data = {
    authors: [
        { id: '1', name: 'Author 1', bookIds: ['101', '102'] },
        { id: '2', name: 'Author 2', bookIds: ['103'] },
    ],
    books: [
        { id: '101', title: 'Book 1', publishedYear: 2020, authorId: '1' },
        { id: '102', title: 'Book 2', publishedYear: 2021, authorId: '1' },
        { id: '103', title: 'Book 3', publishedYear: 2022, authorId: '2' },
    ]
};
export const resolvers = {
    Author:{
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id));
        }
    },
    Book:{
        author: (parent, args, context, info) => {
            return data.authors.find(author => author.id === parent.authorId);
        }
    },
    Query: {
        authors: () => {
            return data.authors;

        },
        books: () => {
            return data.books;
        }
    },
    Mutation: {
        addAuthor: (parent, args, context, info) => {
            const newAuthor = {
                id: String(data.authors.length + 1),
                name: args.name,
                bookIds: []
            };
            data.authors.push(newAuthor);
            return newAuthor;
        },
        addBook: (parent, args, context, info) => {
            const newBook = {
                ...args, id: data.books.length + 1
            };
            data.books.push(newBook);
            const author = data.authors.find(author => author.id === args.authorId);
            if (author) {
                author.bookIds.push(newBook.id);
            }
            return newBook;
        }
    }
}