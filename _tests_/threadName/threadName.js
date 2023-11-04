import { formatContactName } from './utils/formatContactName'

export function response(ctx) {
  if (ctx.error) {
    util.error(ctx.error.message, ctx.error.type)
  }

  let threadName = '[Thread name is undefined]'

  const contact = ctx.result.items[0]
  const contactDetails = contact ? JSON.parse(contact.body) : { given_name: '' }
  const { given_name, surname } = contactDetails

  const name = formatContactName(given_name, surname)
  const email = contact?.contactsk2 || ''
  const phoneNumber = contact?.contactsk3 || ''

  const assignTextBasedOnName = () => {
    if (name === 'unknown' && email.length) {
      assignTextBasedOnEmail()
      return
    }
    if (name === 'unknown' && phoneNumber.length) {
      assignTextBasedOnPhoneNumber()
      return
    }

    threadName = name
  }

  const assignTextBasedOnEmail = () => {
    threadName = email
  }

  const assignTextBasedOnPhoneNumber = () => {
    threadName = phoneNumber
  }

  if (name.length) assignTextBasedOnName()
  else if (email.length) assignTextBasedOnEmail()
  else if (phoneNumber.length) assignTextBasedOnPhoneNumber()
  else if (ctx.source.body.length) threadName = ctx.source.body

  return threadName
}
