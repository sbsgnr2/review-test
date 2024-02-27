export interface textBookHookType {
  validationFunction: (value: string) => string | null | Promise<string | null>
  value?: string | number
}