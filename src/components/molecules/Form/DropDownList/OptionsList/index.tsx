import { OptionType } from '../DropDownListType'
import styles from './OptionsList.module.css'
import { OptionsListType } from './OptionsListType'

export function OptionsList({ handleSelect, options, backgroundList }: OptionsListType) {
  return (
    <ul className={styles.options_list} style={{ backgroundColor: backgroundList }}>
      {options.map((option: OptionType) => (
        <li key={option.value} onClick={() => handleSelect({ selectedValue: option.value })}>
          {option.label}
        </li>
      ))}
    </ul>
  )
}
