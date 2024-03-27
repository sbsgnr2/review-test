import { CheckBox } from '../../Form/CheckBox'
import { checkBoxRowType } from './checkBoxRowType'

export function CheckBoxRow({
  tableConfig,
  checkedArr,
  element,
  handleCheckedArr,
}: checkBoxRowType) {
  return (
    <>
      {tableConfig.withCheckbox && (
        <td>
          <CheckBox
            checked={checkedArr.includes(element.id)}
            handleChange={() => handleCheckedArr({ key: element.id })}
          />
        </td>
      )}
    </>
  )
}
