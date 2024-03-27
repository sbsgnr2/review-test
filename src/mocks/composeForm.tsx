function getElementIdentificator({ text }: { text: string }) {
  return (
    <p
      style={{
        backgroundColor: 'var(--focused-color)',
        width: '2.5rem',
        height: '1.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.4rem',
        fontWeight: '600',
        fontSize: '0.7rem',
        border: 'solid 1px var(--contrast-color)',
        color: 'var(--contrast-color)',
      }}
    >
      {text}
    </p>
  )
}

export const optionsTemplate = [
  { value: '1', label: 'Email Feedback Request', altEl: getElementIdentificator({ text: 'FBK' }) },
  { value: '2', label: 'Email Review Request', altEl: getElementIdentificator({ text: 'RR' }) },
]

export const optionsSMSTemplate = [
  { value: '1', label: 'SMS Feedback Request', altEl: getElementIdentificator({ text: 'FBK' }) },
  { value: '2', label: 'SMS Review Request', altEl: getElementIdentificator({ text: 'RR' }) },
]

export const optionsMicrosurvey = [
  { value: '1', label: 'Default NPS Microsurvey' },
  { value: '2', label: 'Default Stars Microsurvey' },
]
