export const textPreview = (text: string, width: number) => {
    const numChars = width < 1000 ? width / 3 : width / 5
    return text.slice(0, Math.round(numChars)).trim() + "...";
}