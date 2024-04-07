import Geosuggest from 'react-geosuggest'
import styles from './GeosuggestField.module.css'
import { useGeosuggestField } from './useGeosuggestField'
import { GeoSuggestChilds } from './GeoSuggestChilds'

export function GeosuggestField({ refLocationOption, resetSignal }: any) {
  const {
    handleOpen,
    onChange,
    onSuggestSelect,
    isSuggestionsOpen,
    selectedOption,
    geosuggestRef,
  } = useGeosuggestField({ refLocationOption, resetSignal })

  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>Location *</p>
      <Geosuggest
        ref={geosuggestRef}
        placeholder='Enter Location'
        onSuggestSelect={onSuggestSelect}
        inputClassName={styles.inputGeosuggest}
        suggestsClassName={`${isSuggestionsOpen ? styles.suggests : styles.noDisplay}`}
        onFocus={() => handleOpen(true)}
        onBlur={() => handleOpen(false)}
        onChange={onChange}
        autoActivateFirstSuggest
      />
      <GeoSuggestChilds selectedOption={selectedOption} resetSignal={resetSignal} />
    </div>
  )
}
