import styles from './RadioButtons.module.css'
import { RadioButtonsType } from './RadioButtonsType'

export function RadioButtons({
  options,
  label = '',
  name,
  defaultValue,
  isHorizontal = true,
  onChange = () => {},
}: RadioButtonsType) {
  return (
    <div className={styles.content}>
      {label}
      <div
        className={styles.options}
        style={{
          flexDirection: isHorizontal ? 'row' : 'column',
          alignItems: isHorizontal ? 'center' : 'flex-start',
        }}
      >
        {options.map((option) => (
          <label key={option.value} className={styles.label}>
            <input
              type='radio'
              name={name}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  )
}
