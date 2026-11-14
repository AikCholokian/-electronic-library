import {Header} from "./components/Header.jsx";
import {LibraryStats} from "./components/LibraryStats.jsx";
import {books} from "./data/books.js";
import {BookList} from "./components/BookList.jsx";
import {Footer} from "./components/Footer.jsx";
import './App.css';

const genres = [
    "Художественная литература",
    "Учебная литература",
    "Детская литература",
    "Публицистика",
    "Научно-популярная литература"
];

export function App() {
    return (
        <div className="library-app">
            <Header />
            <LibraryStats books={books} />
            <h2 className="catalog-title">Полный каталог</h2>
            <BookList books={books} />
            {genres.map((genre) => (
                <section key={genre} className="genre-section">
                    <h2>{genre}</h2>
                    <BookList books={books} genre={genre} />
                </section>
            ))}
            <Footer />
        </div>
    )
}
