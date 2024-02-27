import { headerType, objectDataType, tableConfigType } from "../tableType"

export interface headerTableType {
  header: headerType[]
  highlightedColor?: string
  color?: string
  backgroundColor?: string
  handleCheckedArr: ({ key }: { key: string }) => void
  checked: boolean
  tableConfig?: tableConfigType
  orderData: ({key, isAsc}:{key: string, isAsc: boolean}) => objectDataType[]
}

export interface handleSelectColumnType { field: string }
