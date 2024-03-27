import { itemType } from "../Table/tableType"

export interface firstColumnType {
  selectedItems: string[]
  handleSelect: ({ id }: { id: string }) => void
  items: itemType[]
}
