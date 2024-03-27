import React from 'react'
import { StarIcon } from '../../Icons/StarIcon'
import styles from './RattingStarsEmail.module.css'

export function RattingStarsEmail() {
  return (
    <>
      <p className={styles.microSurveyText}>
        How was your experience at Clutch Automotive - Dairy Ashford
      </p>
      <div className={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((number: number) => {
          return (
            <React.Fragment key={number}>
              <StarIcon height='2.5rem' width='2.5rem' />
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}
