import styles from './Accordion.module.css'
import { ArrowDownCircleIcon } from '../Icons/ArrowDownCircleIcon';
import { AccordionType } from './AccordionTypes';

export default function Accordion({
    children,
    isOpen = true,
    onChangeOpen,
    header,
    icon,
    style,
    className,
    headerStyle,
    contentStyle,
} : AccordionType) {

    return (<>
      <div className={className} style={style}>
        <div>
          <div className={styles.accordionHeader} style={headerStyle} onClick={(e) => onChangeOpen && onChangeOpen(e)}>
            <div>{header}</div>
            {icon ? 
              <>{icon}</>
              :
              <div className={styles.accordionIcon} style={{ transform: `rotate(${isOpen ? '180' : '0'}deg)`}}><ArrowDownCircleIcon/></div>
            }
          </div>
          <div className={styles.accordionContent} style={{...contentStyle, display: isOpen ? 'none' : 'block' }}>
            {children}
          </div>
        </div>
      </div>
    </>)

    
}