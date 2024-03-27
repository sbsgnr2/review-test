import { ReactElement } from "react";

export interface OptionType { 
  value: string; 
  label: string, 
  description?: string, 
  icon?: ReactElement, 
  color?: string
  altEl?: ReactElement
}

export interface DropDownListType {
  options: OptionType[]
  value: string
  onChange: (selectedValue: string) => void
  width?: string,
  height?: string,
  label: string,
  required?: boolean,
  error: string | null
  backgroundList?: string
  fontSize?: string
  fontWeight?: string
  labelColor?: string
  borderRadius?: string
}
