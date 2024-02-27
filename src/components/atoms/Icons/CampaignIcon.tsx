import { iconType } from '@/models/inconTypes'

export function CampaignIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M716-466v-28h120v28H716Zm42 252-96-72 18-22 96 72-18 22Zm-82-442-18-22 96-72 18 22-96 72ZM226-254v-150h-42q-25 0-42.5-17.5T124-464v-32q0-25 17.5-42.5T184-556h146l146-86v324l-146-86h-76v150h-28Zm222-114v-224l-110 64H184q-12 0-22 10t-10 22v32q0 12 10 22t22 10h154l110 64Zm108-2v-220q18 17 29 46t11 64q0 35-11 64t-29 46ZM300-480Z' />
    </svg>
  )
}
