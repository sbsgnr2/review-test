import { headerType, objectDataType, tableConfigType } from "../tableType"

export interface bodyType {
  data: objectDataType[]
  handleCheckedArr: ({ key }: { key: string }) => void
  checkedArr: string[]
  handleDelete?: ({id, event} : {id: string, event: React.MouseEvent<HTMLButtonElement>}) => void
  handleEdit?: ({id, event} : {id: string, event: React.MouseEvent<HTMLButtonElement>}) => void
  tableConfig: tableConfigType
  header: headerType[]
  fontSize?: string
  pairBackgroundColor?: string
  oddBackgroundColor?: string
  color?: string
}

export interface useBodyType { header: headerType[] }