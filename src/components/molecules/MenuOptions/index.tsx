import styles from './Options.module.css'
import { HomeIcon } from '@/components/atoms/Icons/HomeIcon'
import { NavLeftOptionElement } from './OptionElement'
import { ChartIcon } from '@/components/atoms/Icons/ChartIcon'
import { StarIcon } from '@/components/atoms/Icons/StarIcon'
import { EmailIcon } from '@/components/atoms/Icons/EmailIcon'
import { LocationIcon } from '@/components/atoms/Icons/LocationIcon'
import { ReportIcon } from '@/components/atoms/Icons/ReportIcon'
import { UnreadsEmailIcon } from '@/components/atoms/Icons/UnreadsEmailIcon'

interface MenuOptionsProps {
  iconSize?: string
}

export function MenuOptions({ iconSize = '1.2rem' }: MenuOptionsProps) {
  return (
    <ul className={styles.ul}>
      <NavLeftOptionElement
        urlLink='/'
        icon={<HomeIcon width={iconSize} height={iconSize} />}
        title='Home'
      />
      <NavLeftOptionElement
        urlLink='/locations'
        icon={<LocationIcon width={iconSize} height={iconSize} />}
        title='Locations'
      />
      <NavLeftOptionElement
        urlLink='/statistics'
        icon={<ChartIcon width={iconSize} height={iconSize} />}
        title='Statistics'
      />
      <NavLeftOptionElement
        urlLink='/reviews'
        icon={<StarIcon width={iconSize} height={iconSize} />}
        title='Reviews'
      />
      <NavLeftOptionElement
        urlLink='/requestreview'
        icon={<UnreadsEmailIcon width={iconSize} height={iconSize} />}
        title='Request Reviews'
      />
      <NavLeftOptionElement
        urlLink='/reports'
        icon={<ReportIcon width={iconSize} height={iconSize} />}
        title='Reports'
      />
      <NavLeftOptionElement
        urlLink='/widgets'
        icon={<EmailIcon width={iconSize} height={iconSize} />}
        title='Widgets'
      />
    </ul>
  )
}
