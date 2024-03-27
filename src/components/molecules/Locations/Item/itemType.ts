import { itemType } from "../Table/tableType"

export interface itemCompType {
  handleSelect: ({ id }: { id: string }) => void
  item: itemType
  isAddIcon?: boolean
}
