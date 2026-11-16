import {Card} from "./Card.jsx";
import {AvailabilityBadge} from "./AvailabilityBadge.jsx";

export function BookCard({book}) {
    return (
        <Card>
            <h3 className="book-title">{book.title}</h3>
            <p className="book-info">Автор: {book.author}</p>
            <p className="book-info">Год: {book.year}</p>
            <p className="book-info">Жанр: {book.genre}</p>
            <p className="book-info">Экземпляров: {book.copies}</p>
            <AvailabilityBadge copies={book.copies}/>
            {book.year < 2000 && <span className="classic-badge">Классическое издание</span>}
        </Card>
    )
}