export const genArray = ({ number, firstValue = 0 }: { number: number, firstValue?: number }) => {
    return Array.from({ length: number }, (_, i) => i + firstValue);
}