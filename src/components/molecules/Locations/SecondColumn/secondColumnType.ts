import { itemType } from "../Table/tableType"

export interface secondColumnType {
  selectedItems: string[]
  handleSelect: ({ id }: { id: string }) => void
  items: itemType[]
}
