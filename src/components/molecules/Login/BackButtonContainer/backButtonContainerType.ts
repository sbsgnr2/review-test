import { MouseEventHandler } from "react";

export interface backButtonContainerType { 
  handleForm: MouseEventHandler<HTMLButtonElement>
  isLoginForm: boolean
}