const BOOKS_HOST = "http://localhost:3000";
export function getBooks() {
    try {
        return fetch(`${BOOKS_HOST}/books`)
            .then(response => response.json())
            .then(async books => {
                for (let i = 0; i < books.length; i++) {
                    books[i].author = await getAuthor(books[i].authorId);
                }
                return books;
            });
    } catch(error) {
        console.error(error);
    }
}

async function getAuthor(id) {
    try {
        return fetch(`${BOOKS_HOST}/authors/${id}`)
            .then(response => response.json())
            .then(author => author);
    } catch(error) {
        console.error(error);
    }
}

export function getBook(id) {
    try {
        return fetch(`${BOOKS_HOST}/books/${id}`)
            .then(response => response.json())
            .then(async book => {
                book.author = await getAuthor(book.authorId);
                return book;
            });
    } catch(error) {
        console.error(error);
    }
}

export function createBook(book) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(book)
        }
        return fetch(`${BOOKS_HOST}/books`, options)
            .then(response => response.json())
            .then(book => book);
    } catch(error) {
        console.error(error);
    }
}

export async function updateBook(book) {
    try {
        const options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(book)
        }
        return fetch(`${BOOKS_HOST}/books/${book.id}`, options)
            .then(response => response.json())
            .then(book => book);
    } catch(error) {
        console.error(error);
    }
}

export async function deleteBook(id) {
    try {
        const options = {
            method: "DELETE"
        }
        return fetch(`${BOOKS_HOST}/books/${id}`, options)
            .then(response => response.json())
            .then(book => book);
    } catch(error) {
        console.error(error);
    }
}

