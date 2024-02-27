import styles from './VariablesColumns.module.css'
import { SwitchLeft } from '@/components/atoms/Icons/SwitchLeft'
import { SwitchRight } from '@/components/atoms/Icons/SwitchRight'
import { variablesColumns } from './variablesColumns'
import { headerType } from '../../tableType'

export default function VariablesColumns({
  header,
  highlightedColor = 'var(--focused-color)',
  color = 'var(--primary-color)',
  selectedColumn,
  handleSelectedColumn,
  isAscOrder,
}: variablesColumns) {
  return (
    <>
      {header?.map((element: headerType) => {
        return (
          <th key={element.id}>
            <div
              className={styles.header}
              style={{
                color: selectedColumn === element.field ? highlightedColor : color,
              }}
            >
              {element.title}
              {element.withArrows && (
                <span
                  className={styles.icon}
                  onClick={() => handleSelectedColumn({ field: element.field })}
                  style={{
                    fill: selectedColumn === element.field ? highlightedColor : color,
                  }}
                >
                  {selectedColumn === element.field && isAscOrder ? (
                    <SwitchRight width='0.9rem' height='0.9rem' />
                  ) : (
                    <SwitchLeft width='0.9rem' height='0.9rem' />
                  )}
                </span>
              )}
            </div>
          </th>
        )
      })}
    </>
  )
}
