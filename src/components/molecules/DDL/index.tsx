import { DDLType } from './DDLType'
import { DropDownList } from '../Form/DropDownList'
import { useDDL } from './useDDL'

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
  borderRadius,
  fontSize = '0.7rem',
  color = 'var(--second-color)',
}: DDLType) {
  const { selected, handleSelected } = useDDL({ handleChange, value })
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
      borderRadius={borderRadius}
      labelColor={color}
      fontSize={fontSize}
    />
  )
}
