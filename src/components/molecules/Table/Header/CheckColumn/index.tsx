import styles from './CheckColumn.module.css'
import { CheckBox } from '@/components/molecules/Form/CheckBox'
import { checkedColumnType } from './checkedColumnType'

export default function CheckColumn({ handleCheckedArr, checked }: checkedColumnType) {
  return (
    <th className={styles.th} style={{ width: '2rem' }}>
      <CheckBox checked={checked} handleChange={() => handleCheckedArr({ key: 'all' })} />
    </th>
  )
}
