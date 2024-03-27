import styles from './selectInput.module.css'
import { SelectInputType } from './SelectInputType'
import { useSelectInput } from './useSelectInput'
import { OptionsList } from '../OptionsList'
import { SelectedValue } from '../SelectedValue'

export function SelectInput({
  onChange,
  options,
  height,
  value,
  width,
  backgroundList,
  borderRadius,
}: SelectInputType) {
  const { isOpen, handleToggle, handleSelect, ref } = useSelectInput({
    onChange,
  })
  return (
    <div className={styles.custom_dropdown} style={{ width }} ref={ref}>
      <SelectedValue
        handleToggle={handleToggle}
        isOpen={isOpen}
        height={height}
        value={value}
        options={options}
        borderRadius={borderRadius}
      />
      {isOpen && (
        <OptionsList
          handleSelect={handleSelect}
          options={options}
          backgroundList={backgroundList}
        />
      )}
    </div>
  )
}
