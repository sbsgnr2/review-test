import { HomeIcon } from '@/components/atoms/Icons/HomeIcon'
import { ForumIcon } from '@/components/atoms/Icons/ForumIcon'
import { KeyIcon } from '@/components/atoms/Icons/KeyIcon'
import { AskIcon } from '@/components/atoms/Icons/AskIcon'
import { CompetitorIcon } from '@/components/atoms/Icons/CompetitorIcon'
import { MonitoringIcon } from '@/components/atoms/Icons/MonitoringIcon'
import { ReportIcon } from '@/components/atoms/Icons/ReportMenuIcon'
import { CampaignIcon } from '@/components/atoms/Icons/CampaignIcon'
import { CameraIcon } from '@/components/atoms/Icons/CameraIcon'
import { ListIcon } from '@/components/atoms/Icons/ListIcon'

export const MENU = [
  {
    id: 1,
    title: null,
    options: [
      {
        title: 'Home',
        icon: <HomeIcon width='1.4rem' height='1.4rem' />,
        href: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Review Analysis',
    options: [
      {
        title: 'Reviews',
        icon: <ForumIcon width='1.4rem' height='1.4rem' />,
        href: '/reviews',
      },
      {
        title: 'Keywords',
        icon: <KeyIcon width='1.4rem' height='1.4rem' />,
        href: '/keywords',
      },
      {
        title: 'Requests',
        icon: <AskIcon width='1.4rem' height='1.4rem' />,
        href: '/requests/overview',
      },
    ],
  },
  {
    id: 3,
    title: 'Business Performance',
    options: [
      {
        title: 'Reports',
        icon: <ReportIcon width='1.4rem' height='1.4rem' />,
        href: '/reports',
      },
      {
        title: 'Location Performance',
        icon: <MonitoringIcon width='1.4rem' height='1.4rem' />,
        href: '/location-performance',
      },
      {
        title: 'Competitors',
        icon: <CompetitorIcon width='1.4rem' height='1.4rem' />,
        href: '/competitors',
      },
    ],
  },
  {
    id: 4,
    title: 'Online Presence',
    options: [
      {
        title: 'Widgets',
        icon: <CampaignIcon width='1.4rem' height='1.4rem' />,
        href: '/widgets',
      },
      {
        title: 'Local Listings',
        icon: <ListIcon width='1.4rem' height='1.4rem' />,
        href: '/local-listings',
      },
      {
        title: 'Photos',
        icon: <CameraIcon width='1.4rem' height='1.4rem' />,
        href: '/photos',
      },
    ],
  },
]
