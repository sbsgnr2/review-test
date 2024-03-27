import React from "react"
import { Square } from "../../Square"
import styles from './MicroSurvey.module.css'

export function MicroSurvey() {
  return (
    <>
      <p className={styles.microSurveyText}>
        How likely are you to recommend Clutch Automotive - Dairy Ashford to a friend or colleague?
      </p>
      <div className={styles.squaresContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number: number) => {
          return (
            <React.Fragment key={number}>
              <Square number={number} />
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}
