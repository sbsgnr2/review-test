/* eslint-disable @next/next/no-img-element */
import { ratingType } from '@/components/atoms/Rating/RatingType'
import styles from './Rating.module.css'
import React from 'react';
import { genArray } from '@/utils/functions/ArrayMgr';

export function Rating({
  icon,
  stars
}: ratingType) {

  return (
    <>
      <div className={styles.circle}>
        {genArray({number: stars, firstValue: 1}).map((n) => (
          <React.Fragment key={n}>{icon}</React.Fragment>
        ))}
      </div>
    </>
  )
}
