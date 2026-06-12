export function deployStamp(d = new Date()) {
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
}

export function currentYear() {
    return new Date().getFullYear();
}
