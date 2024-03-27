export interface headerType {
  id: string | number
  title: string
  field: string
  withArrows: boolean
}

export interface objectDataType {
  [key: string]: string | number | string[] ;
  id: string;
}

export interface selectedsEl {
  field: string
  element: any
}

export interface tableConfigType {
  withCheckbox: boolean,
  withActions: boolean,
  withDelete: boolean,
  withEdit: boolean,
  withPagination: boolean,
  colorRows: string[],
  multipleRows: string[],
  starRows: string[],
  redirectButtons: string[],
  selecteds: selectedsEl[]
}

export interface tableType {
  header: headerType[]
  data: objectDataType[]
  tableConfig: tableConfigType
  width?: string
  handleDelete?: ({id, event} : {id: string, event: React.MouseEvent<HTMLButtonElement>}) => void
  handleEdit?: ({id, event} : {id: string, event: React.MouseEvent<HTMLButtonElement>}) => void
  handleOrderData?: ({key, isAsc}: {key: string, isAsc: boolean}) => objectDataType[]
  totalPages?: number
  totalResults?: number
  handlePagination?: ({ value }: { value: number }) => void
  rowsPerPage?: number
  backgroundColor?: string
  pairBackgroundColor?: string
  oddBackgroundColor?: string
  fontSize?: string
  headerColor?: string
  bodyColor?: string
  actualPage?: number
  padding?: string
}

export interface useTableType { data: objectDataType[], handleOrderData?: ({key, isAsc}: {key: string, isAsc: boolean}) => objectDataType[] }
