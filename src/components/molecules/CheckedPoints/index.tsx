import styles from './CheckedPoints.module.css'
import { DoneBoldIcon } from '@/components/atoms/Icons/DoneBoldIcon'
import { checkedArrType, checkedPointsType } from './checkedPointsType'

export function CheckedPoints({ checkedArr }: checkedPointsType) {
  return (
    <>
      {checkedArr?.length > 1 && (
        <div className={styles.stepsContainer}>
          {checkedArr?.map((checkedEl: checkedArrType, index: number) => {
            return (
              <div key={checkedEl.title} className={styles.normalPoints}>
                <p className={styles.title}>{checkedEl.title}</p>
                <div
                  className={(checkedEl.completed || checkedEl.actual) ? styles.circleSelected : styles.circleUnselected}
                >
                  {checkedEl.completed ? (
                    <DoneBoldIcon width='0.8rem' height='0.8rem' />
                  ) : (
                    <span>{checkedEl.label}</span>
                  )}
                </div>
                {index + 1 !== checkedArr.length && (
                  <div
                    className={styles.line}
                    style={{
                      backgroundColor: checkedEl.completed
                        ? 'var(--focused-color)'
                        : 'var(--border-color)',
                    }}
                  ></div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
