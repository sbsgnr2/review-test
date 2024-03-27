import styles from './SecondColumn.module.css'
import { itemType } from '../Table/tableType'
import React from 'react'
import { secondColumnType } from './secondColumnType'
import { Item } from '../Item'
import { NoContent } from '../NoContent'
import { Header } from '../Header'

export default function SecondColumn({ selectedItems, handleSelect, items }: secondColumnType) {
  return (
    <div className={styles.secondColumn}>
      <Header selectedItems={selectedItems} handleSelect={handleSelect} />
      <div className={styles.secondColBody}>
        {!selectedItems.length && <NoContent />}
        <div>
          {items?.map((item: itemType) => {
            return (
              <React.Fragment key={item.id}>
                {selectedItems.includes(item.id) && (
                  <Item handleSelect={handleSelect} item={item} isAddIcon={false} />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
