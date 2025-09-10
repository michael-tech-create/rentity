export function TimeStampToDAte (stamp) {
    const t = new Date (stamp);
    return t.toLocaleDateString();
}