import { OptionType } from '../DropDownListType'
import { OptionsListType } from './OptionsListType'
import styles from './OptionsList.module.css'

export function OptionsList({ handleSelect, options, backgroundList }: OptionsListType) {
  return (
    <ul className={styles.options_list} style={{ backgroundColor: backgroundList }}>
      {options.map((option: OptionType) => (
        <li key={option.value} onClick={() => handleSelect({ selectedValue: option.value })}>
          <div className={styles.title}>
            {option.altEl && <div>{option.altEl}</div>}
            {option.icon && <span>{option.icon}</span>}
            {option.color && (
              <span className={styles.circle} style={{ backgroundColor: option.color }}></span>
            )}
            <p>{option.label}</p>
          </div>
          {option.description && <p className={styles.description}>{option.description}</p>}
        </li>
      ))}
    </ul>
  )
}
