import {BookCard} from "./BookCard.jsx";

export function BookList({books, genre}) {
    let bookShow = books;
    if (genre) {
        bookShow = books.filter((book) => book.genre === genre);
    }
    if (bookShow.length === 0) {
        return <p className="empty-message">В выбранной категории книги отсутствуют.</p>;
    }
    return (
        <div className="book-list-grid">
            {bookShow.map((book) => (<BookCard key={book.id} book={book} />))}
        </div>
    );
}
