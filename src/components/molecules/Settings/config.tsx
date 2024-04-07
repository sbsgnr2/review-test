import { AlertIcon } from '@/components/atoms/Icons/AlertIcon'
import { CompanyIcon } from '@/components/atoms/Icons/CompanyIcon'
import { LocationCircleIcon } from '@/components/atoms/Icons/LocationCircleIcon'
import { ProfileIcon } from '@/components/atoms/Icons/ProfileIcon'
import { UserGroupIcon } from '@/components/atoms/Icons/UserGroupIcon'
import { sectionCardType } from '@/models/sectionCardType'

export const SETTINGS_CONFIG: sectionCardType[] = [
  {
    sectionTitle: 'Account Management',
    items: [
      {
        title: 'Companies',
        subtitle: 'Manage your companies',
        icon: <CompanyIcon width='2rem' height='2rem' />,
        href: '/settings/companies',
      },
      {
        title: 'Locations and Groups',
        subtitle: 'Manage your locations, groups and themes',
        icon: <LocationCircleIcon width='2rem' height='2rem' />,
        href: '/settings/locations',
      },
      {
        title: 'Profile',
        subtitle: 'Change your login details',
        icon: <ProfileIcon width='2rem' height='2rem' />,
        href: '/settings/profile',
      },
      {
        title: 'Users',
        subtitle: 'Manage who has access to your account',
        icon: <UserGroupIcon width='2rem' height='2rem' />,
        href: '/settings/users',
      },
    ],
  },
  {
    sectionTitle: 'App Settings',
    items: [
      {
        title: 'Alerts',
        subtitle: 'Set up ways to stay informed about your reviews',
        icon: <AlertIcon width='2rem' height='2rem' />,
        href: '#',
      },
    ],
  },
]
