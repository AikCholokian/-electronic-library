export function AvailabilityBadge({copies}) {
    return copies > 0 ? (
        <span className="badge-available">Доступна</span>
    ) : (
        <span className="badge-unavailable">Нет в наличии</span>
    );
}
