export const USER_HEADER = [
  { id: '1', title: 'Fullname', field: 'fullname', withArrows: true },
  { id: '2', title: 'Email', field: 'email', withArrows: true },
  { id: '3', title: 'Type', field: 'type', withArrows: true },
  { id: '4', title: 'Verify', field: 'verify', withArrows: true },
  { id: '5', title: 'Created Date', field: 'createdInfo', withArrows: true },
  { id: '6', title: 'Updated Date', field: 'updatedInfo', withArrows: true },
]

export const USER_TABLE_CONFIG = {
  withCheckbox: true,
  withActions: true,
  withDelete: true,
  withEdit: true,
  withPagination: true,
  colorRows: ['fullname'],
  starRows: [],
  multipleRows: ['createdInfo', 'updatedInfo'],
  redirectButtons: [],
  selecteds: [],
}

export const USER_ACTIVITY_HEADER = [
  { id: '1', title: 'Name', field: 'name', withArrows: true },
  { id: '2', title: 'Request Sent', field: 'requests_sent', withArrows: true },
  { id: '3', title: 'Reviews Responded', field: 'reviews_responded', withArrows: true },
]

export const USER_ACTIVITY_DATA = [
  {
    id: '1',
    name: 'Jhony Chu',
    requests_sent: '0',
    reviews_responded: 0,
  },
  {
    id: '2',
    name: 'Mario Aguilar',
    requests_sent: 1,
    reviews_responded: 1,
  },
  {
    id: '3',
    name: 'Kenny He',
    requests_sent: 2,
    reviews_responded: 1,
  },
]

export const USER_ACTIVITY_TABLE_CONFIG = {
  withCheckbox: true,
  withActions: true,
  withDelete: true,
  withEdit: true,
  withPagination: true,
  colorRows: ['name'],
  multipleRows: [],
  starRows: [],
  redirectButtons: [],
  selecteds: [],
}

export const LOCATION_HEADER = [
  { id: '1', title: 'Name', field: 'name', withArrows: true },
  { id: '2', title: 'Account', field: 'accountName', withArrows: true },
  { id: '3', title: 'Country', field: 'country', withArrows: true },
  { id: '4', title: 'City', field: 'city', withArrows: true },
  { id: '5', title: 'Created Date', field: 'createdInfo', withArrows: true },
  { id: '6', title: 'Updated Date', field: 'updatedInfo', withArrows: true },
]

export const LOCATION_TABLE_CONFIG = {
  withCheckbox: true,
  withActions: true,
  withDelete: true,
  withEdit: true,
  withPagination: true,
  colorRows: ['name'],
  multipleRows: ['createdInfo', 'updatedInfo'],
  starRows: [],
  redirectButtons: [],
  selecteds: [],
}
