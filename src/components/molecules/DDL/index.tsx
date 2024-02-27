import { useState } from 'react'
import { DDLType } from './DDLType'
import { DropDownList } from '../Form/DropDownList'

export function DDL({
  options,
  handleChange,
  label,
  backgroundList = 'var(--secondary-bg-color)',
  fontWeight = '600',
  width = '100%',
  height = '2rem',
  required = true,
  value = null,
}: DDLType) {
  const [selected, setSelected] = useState<string>(value ? value : '')

  function handleSelected(selectedValue: string) {
    setSelected(selectedValue)
    handleChange(selectedValue)
  }

  return (
    <DropDownList
      options={options}
      value={selected}
      label={label}
      onChange={handleSelected}
      error={null}
      width={width}
      backgroundList={backgroundList}
      fontWeight={fontWeight}
      height={height}
      required={required}
    />
  )
}
