export const formatContactName = (firstName = '', lastName = '') => {
  const cleanupName = (name) => {
    if (typeof name !== 'string') return ''
    return name.replaceAll(',', '').trim()
  }

  let formattedFirstName = cleanupName(firstName)
  let formattedLastName = cleanupName(lastName)

  const firstNameUnknown = () => {
    return (
      formattedFirstName.toLowerCase() === 'unknown' || formattedFirstName === ''
    )
  }

  const lastNameUnknown = () => {
    return formattedLastName.toLowerCase() === 'unknown' || formattedLastName === ''
  }

  const fullNameUnknown = () => {
    return firstNameUnknown() && lastNameUnknown()
  }

  const firstNameHasLastname = () => {
    return formattedFirstName.includes(formattedLastName)
  }

  const firstAndLastNameAreSame = () => {
    return formattedFirstName === formattedLastName
  }

  if (fullNameUnknown()) return 'unknown'
  if (firstNameUnknown()) return formattedLastName
  if (lastNameUnknown()) return formattedFirstName
  if (firstAndLastNameAreSame()) return formattedFirstName.trim()
  if (firstNameHasLastname()) {
    formattedFirstName = formattedFirstName.replace(formattedLastName, '').trim()
  }

  return `${formattedFirstName} ${formattedLastName}`
}
