export function LibraryStats({books}) {
    const availableBooks = books.filter(book => book.copies > 0);
    const availableCount = availableBooks.length;
    return (
        <div className="library-stats">
            <p className="stat-item">{books.length}</p>
            <p className="stat-item">{availableCount}</p>
        </div>
    )
}
