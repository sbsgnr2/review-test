import { objectDataType, tableConfigType } from '../tableType';

export interface checkBoxRowType {
  tableConfig: tableConfigType
  checkedArr: string[]
  element: objectDataType
  handleCheckedArr: ({ key }: { key: string }) => void
}