export function getFullName ({ firstName, lastName }: { firstName: string|null, lastName: string|null }) {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`
  } else if (firstName) {
    return firstName
  } else {
    return '-'
  }
}
