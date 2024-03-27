import { ReactNode } from "react";

export interface headerType { 
  count?: number, 
  textButton?: string, 
  title: string,
  href?: string,
  children?: ReactNode
}
