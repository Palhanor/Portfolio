export const textPreview = (text: string, chars: number) => {
    return text.slice(0, chars).trim() + "...";
}