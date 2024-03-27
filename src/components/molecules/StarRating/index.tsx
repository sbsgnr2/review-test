import React from 'react'
import { StarRatingType } from './StarRatingType'
import { Star } from '../../atoms/Star'

export function StarRating({ rating, width = '12px', height = '12px' }: StarRatingType) {
  const filledStars = Math.floor(rating)
  const halfStar = rating - filledStars >= 0.1

  const starComponents = []
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      starComponents.push(<Star key={i} width={width} height={height} filled />)
    } else if (i === filledStars && halfStar) {
      starComponents.push(<Star key={i} width={width} height={height} halfFilled />)
    } else {
      starComponents.push(<Star key={i} width={width} height={height} />)
    }
  }

  return <div className='star-rating'>{starComponents}</div>
}
