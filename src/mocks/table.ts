export const USER_HEADER = [
  { id: '1', title: 'Fullname', field: 'fullname', withArrows: true },
  { id: '2', title: 'Email', field: 'email', withArrows: true },
  { id: '3', title: 'Gender', field: 'gender', withArrows: true },
  { id: '4', title: 'Age', field: 'age', withArrows: true },
]

export const USER_DATA = [
  {
    id: '1',
    fullname: 'Jhony Chu',
    email: 'jhonychu@gmail.com',
    gender: 'male',
    age: 30,
  },
  {
    id: '2',
    fullname: 'Mario Aguilar',
    email: 'marioaguilar@gmail.com',
    gender: 'male',
    age: 31,
  },
  { 
    id: '3', 
    fullname: 'Kenny He', 
    email: 'kennyhe@gmail.com', 
    gender: 'male', 
    age: 32, 
  },
]

export const USER_TABLE_CONFIG = {
  withCheckbox: true,
  withActions: true,
  withDelete: true,
  withEdit: true,
  withPagination: true,
  colorRows: ['fullname']
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
  colorRows: ['name']
}

export const LOCATION_HEADER = [
  { id: '1', title: 'Name', field: 'name', withArrows: true },
  { id: '2', title: 'Company', field: 'company', withArrows: true },
]

export const LOCATION_DATA = [
  {
    id: '1',
    name: 'Location 1',
    company: 'Company 1',
  },
  {
    id: '2',
    name: 'Location 2',
    company: 'Company 2',
  },
  { 
    id: '3', 
    name: 'Location 3',
    company: 'Company 3',
  },
]

export const LOCATION_TABLE_CONFIG = {
  withCheckbox: true,
  withActions: true,
  withDelete: true,
  withEdit: true,
  withPagination: true,
  colorRows: ['name']
}

export const COMPANY_HEADER = [
  { id: '1', title: 'Name', field: 'name', withArrows: true },
]

export const COMPANY_DATA = [
  {
    id: '1',
    name: 'Company 1',
  },
  {
    id: '2',
    name: 'Company 2',
  },
  { 
    id: '3', 
    name: 'Company 3',
  },
]

export const COMPANY_TABLE_CONFIG = {
  withCheckbox: true,
  withActions: true,
  withDelete: true,
  withEdit: true,
  withPagination: true,
  colorRows: ['name']
}