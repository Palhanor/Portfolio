export const textPreview = (text: string, width: number) => {
    return text.slice(0, Math.round(width/3)).trim() + "...";
}