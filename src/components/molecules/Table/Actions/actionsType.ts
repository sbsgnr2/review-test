import { objectDataType, tableConfigType } from "../tableType";

export interface ActionsType {
  tableConfig: tableConfigType
  handleDelete?: ({id, event} : {id: string, event: React.MouseEvent<HTMLButtonElement>}) => void
  handleEdit?: ({id, event} : {id: string, event: React.MouseEvent<HTMLButtonElement>}) => void 
  element: objectDataType 
}