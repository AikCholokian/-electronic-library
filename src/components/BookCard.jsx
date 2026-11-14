import {Card} from "./Card.jsx";
import {AvailabilityBadge} from "./AvailabilityBadge.jsx";

export function BookCard({book}) {
    return (
        <Card>
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Год: {book.year}</p>
            <p>Жанр: {book.genre}</p>
            <p>Экземпляров: {book.copies}</p>
            <AvailabilityBadge copies={book.copies}/>
            {book.year < 2000 && <span className="classic">Классическое издание</span>}
        </Card>
    )
}