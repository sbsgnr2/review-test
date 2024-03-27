import { OptionsBox } from '../OptionsBox'
import { PreviewBox } from '../PreviewBox'
import { PreviewSMSBox } from '../PreviewSMSBox'
import styles from './ContainerBoxes.module.css'
import { containerBoxesType } from './containerBoxesType'

export function ContainerBoxes({ format }: containerBoxesType) {
  return (
    <div className={styles.containerBoxes}>
      <OptionsBox format={format} />
      {format === 'email' ? <PreviewBox /> : <PreviewSMSBox />}
    </div>
  )
}
