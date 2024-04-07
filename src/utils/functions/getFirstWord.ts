export function getFirstWord (text: string) {
  const words = text?.split(' ');
  return words ? words[0] : null;
}