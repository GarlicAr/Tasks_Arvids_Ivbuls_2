export function MinYear(year) {
    let result = "";

    if (year >= 1999 && year <= 2023) {
        const multiplier = year - 1999;
        result = `${multiplier * 4}%`;
    } else {
        result = 'Error';
    }

    return result;
}
