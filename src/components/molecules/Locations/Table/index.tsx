import styles from './Table.module.css'
import FirstColumn from '../FirstColumn'
import SecondColumn from '../SecondColumn'
import { useTable } from './useTable'
import { tableType } from './tableType'

export default function Table({
  totalColumns = 2,
  width = '100%',
  handleChange,
  locations,
}: tableType) {
  const { LOCATIONS, selectedItems, handleAddItem, handleRemoveItem } = useTable({
    handleChange,
    locations,
  })
  return (
    <div
      className={styles.table}
      style={{
        gridTemplateRows: totalColumns === 1 ? 'repeat(2, max-content)' : undefined,
        gridTemplateColumns: totalColumns === 1 ? '1fr' : undefined,
        width,
      }}
    >
      {LOCATIONS && (
        <>
          <FirstColumn
            items={LOCATIONS}
            selectedItems={selectedItems}
            handleSelect={handleAddItem}
          />
          <SecondColumn
            items={LOCATIONS}
            selectedItems={selectedItems}
            handleSelect={handleRemoveItem}
          />
        </>
      )}
    </div>
  )
}
