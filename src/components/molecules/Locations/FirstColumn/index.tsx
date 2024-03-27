import styles from './FirstColumn.module.css'
import { itemType } from '../Table/tableType'
import React from 'react'
import { firstColumnType } from './firstColumnType'
import { Header } from '@/components/atoms/Locations/Header'
import { Selection } from '../Selection'
import { Search } from '../Search'
import { SelectAll } from '../SelectAll'
import { Item } from '../Item'
import { useFirstColumn } from './useFirstColumn'

export default function FirstColumn({ selectedItems, handleSelect, items }: firstColumnType) {
  const { search, handleSearch } = useFirstColumn()

  return (
    <div className={styles.firstColumn}>
      <Header />
      <Selection items={items} selectedItems={selectedItems} />
      <Search handleSearch={handleSearch} />
      <SelectAll handleSelect={handleSelect} />
      <div className={styles.items}>
        {items?.map((item: itemType) => {
          return (
            <React.Fragment key={item.id}>
              {!selectedItems.includes(item.id) &&
                item.title.toLowerCase().includes(search.toLowerCase()) && (
                  <Item item={item} handleSelect={handleSelect} />
                )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
