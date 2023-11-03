export const formatContactName = (firstName = "", lastName = "") => {
  const cleanupName = (name) => {
    return name.replaceAll(",", "").trim()
  }

  let formattedFirstName = cleanupName(firstName)
  let formattedLastName = cleanupName(lastName)

  const firstNameUnknown = () => {
    return (
      formattedFirstName.toLowerCase() === "unknown" ||
      formattedFirstName === ""
    )
  }

  const lastNameUnknown = () => {
    return (
      formattedLastName.toLowerCase() === "unknown" || formattedLastName === ""
    )
  }

  const fullNameUnknown = () => {
    return firstNameUnknown() && lastNameUnknown()
  }

  const firstNameHasLastname = () => {
    return formattedFirstName.includes(formattedLastName)
  }

  if (fullNameUnknown()) return "unknown"
  if (firstNameUnknown()) return formattedLastName
  if (lastNameUnknown()) return formattedFirstName
  if (firstNameHasLastname()) {
    formattedFirstName = formattedFirstName.replace(formattedLastName, "")
  }

  return `${formattedFirstName} ${formattedLastName}`
}
