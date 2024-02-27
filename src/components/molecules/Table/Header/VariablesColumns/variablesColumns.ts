import { headerType } from "../../tableType"

export interface variablesColumns {
  header: headerType[]
  highlightedColor?: string
  color?: string
  selectedColumn: string | null
  handleSelectedColumn: ({ field }: handleSelectColumnType) => void
  isAscOrder: boolean
}

export interface handleSelectColumnType { field: string }
