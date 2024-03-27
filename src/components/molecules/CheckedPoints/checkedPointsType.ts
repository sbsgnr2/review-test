export interface checkedArrType {
  label: string|number
  title: string
  completed: boolean
  actual: boolean
}

export interface checkedPointsType {
  checkedArr: checkedArrType[]
}
