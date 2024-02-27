import styles from './Header.module.css'
import { useHeader } from './useHeader'
import { headerTableType } from './headerTableType'
import CheckColumn from './CheckColumn'
import VariablesColumns from './VariablesColumns'

export default function Header({
  header,
  highlightedColor = 'var(--focused-color)',
  color = 'var(--primary-color)',
  backgroundColor = 'var(--terciary-bg-color)',
  handleCheckedArr,
  checked,
  tableConfig,
  orderData,
}: headerTableType) {
  const { handleSelectedColumn, selectedColumn, isAscOrder } = useHeader({ orderData })

  return (
    <thead className={styles.thead}>
      <tr style={{ backgroundColor: backgroundColor }}>
        {tableConfig?.withCheckbox && (
          <CheckColumn handleCheckedArr={handleCheckedArr} checked={checked} />
        )}
        <VariablesColumns
          header={header}
          highlightedColor={highlightedColor}
          color={color}
          selectedColumn={selectedColumn}
          handleSelectedColumn={handleSelectedColumn}
          isAscOrder={isAscOrder}
        />
        {tableConfig?.withActions && <th></th>}
      </tr>
    </thead>
  )
}
