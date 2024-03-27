import { optionsStates } from "@/mocks/reviews";
import { DDL } from "../../DDL";

export function OptionsStatesDDL({ selected }: { selected: string }) {
  return (
    <DDL
      options={optionsStates}
      handleChange={() => {}}
      label=''
      width='11rem'
      required={false}
      backgroundList='var(--main-bg-color)'
      value={selected}
      borderRadius={'4px'}
    />
  )
}
