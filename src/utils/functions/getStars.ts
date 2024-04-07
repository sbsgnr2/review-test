import { getFirstWord } from "./getFirstWord"

export function getStars (rating: string) {
  const stars = getFirstWord(rating)
  if (!stars) {
    return '-'
  }
  return parseFloat(stars)
}