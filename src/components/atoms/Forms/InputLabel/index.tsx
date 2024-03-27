import styles from './InputLabel.module.css'
import { inputLabelType } from '@/components/atoms/Forms/InputLabel/inputLabelType'

export function InputLabel({
  focused,
  required,
  labelText,
  value,
  variant,
  positionTop = '50%',
  fontSize = '0.7rem',
  fontWeight = '500',
  color = 'var(--primary-color)',
}: inputLabelType) {
  return (
    <label
      style={{
        top:
          focused ||
          value ||
          ['focused_outlined', 'border_focused_outlined', 'rounded_outlined_focus'].includes(
            variant
          )
            ? '-0.75rem'
            : positionTop,
        fontSize:
          focused ||
          value ||
          ['focused_outlined', 'rounded_outlined_focus', 'rounded_outlined'].includes(variant)
            ? fontSize
            : ['border_focused_outlined'].includes(variant)
            ? '0.7rem'
            : '0.9rem',
        fontWeight,
        color: ['border_focused_outlined'].includes(variant) ? 'var(--second-color)' : color,
        left: ['border_focused_outlined', 'rounded_outlined_focus', 'rounded_outlined'].includes(
          variant
        )
          ? '0'
          : '0.625rem',
      }}
      className={styles.label}
    >
      {required ? `${labelText} *` : labelText}
    </label>
  )
}
