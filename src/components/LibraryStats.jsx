export function LibraryStats({books}) {
    const availableBooks = books.filter(book => book.copies > 0);
    const availableCount = availableBooks.length;
    return (
        <div className="library-stats">
            <div className="stat-item">
                Всего книг
                <span className="stat-value">{books.length}</span>
            </div>
            <div className="stat-item">
                Доступно
                <span className="stat-value">{availableCount}</span>
            </div>
        </div>
    )
}
