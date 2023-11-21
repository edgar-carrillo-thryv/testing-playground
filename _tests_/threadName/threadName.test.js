import { response } from './threadName'
import { createContext } from './utils/createContext'

// Name -> email -> phone number

describe('Test threadName response resolver', () => {
  describe('Unknown Name Tests', () => {
    test('Returns correct full name', () => {
      const context = createContext({
        firstName: 'Ryan',
        lastName: 'Cantor',
      })
      expect(response(context)).toBe('Ryan Cantor')
    })

    test('Returns unknown when firstname & lastname are unknown regardless of casing', () => {
      const context = createContext({
        firstName: 'UnkNown',
        lastName: 'Unknown',
      })
      expect(response(context)).toBe('unknown')
    })

    test('Returns firstname if lastname is unknown regardless of casing', () => {
      const context = createContext({
        firstName: 'Ryan',
        lastName: 'UnkNown',
      })
      expect(response(context)).toBe('Ryan')
    })

    test('Returns firstname if lastname is unknown regardless of casing', () => {
      const context = createContext({
        firstName: 'UnkNown',
        lastName: 'Cantor',
      })
      expect(response(context)).toBe('Cantor')
    })

    test('Returns firstname if lastname is undefined', () => {
      const context = createContext({
        firstName: 'Ryan',
      })
      expect(response(context)).toBe('Ryan')
    })

    test('Returns lastname if firstname is undefined', () => {
      const context = createContext({
        lastName: 'Cantor',
      })
      expect(response(context)).toBe('Cantor')
    })

    test('Returns unknown if firstname && lastname is undefined', () => {
      const context = createContext({})
      expect(response(context)).toBe('unknown')
    })
  })

  describe('Name Tests', () => {
    test('Remove , from firstName if it has it', () => {
      const context = createContext({
        firstName: 'Ryan,',
      })
      expect(response(context)).toBe('Ryan')
    })

    test('Remove , from lastName if it has it', () => {
      const context = createContext({
        firstName: 'Ryan',
        lastName: 'Cantor,',
      })
      expect(response(context)).toBe('Ryan Cantor')
    })

    test('Remove , from first and last name if both have it', () => {
      const context = createContext({
        firstName: 'Ryan,',
        lastName: 'Cantor,',
      })
      expect(response(context)).toBe('Ryan Cantor')
    })

    test('Remove Surname from firstName if it exists there', () => {
      const context = createContext({
        firstName: 'Ryan Cantor',
        lastName: 'Cantor',
      })
      expect(response(context)).toBe('Ryan Cantor')
    })

    test('If firstName & surname are the same, return just the firstName', () => {
      const context = createContext({
        firstName: 'Garlen',
        lastName: 'Garlen',
      })
      expect(response(context)).toBe('Garlen')
    })

    test('If firstName & surname contain the same name but are different, return the fullname', () => {
      const context = createContext({
        firstName: 'Jack',
        lastName: 'Jackson',
      })
      expect(response(context)).toBe('Jack Jackson')
    })

    test('If firstName & surname contain the same name but are different, return the fullname', () => {
      const context = createContext({
        firstName: 'Adonis',
        lastName: 'Adon',
      })
      expect(response(context)).toBe('Adonis Adon')
    })

    test('If firstName has lastname, return the fullname', () => {
      const context = createContext({
        firstName: 'Edgar Carrillo',
        lastName: 'Carrillo',
      })
      expect(response(context)).toBe('Edgar Carrillo')
    })

    test('If full name is provided & email is provided, return just the fullname', () => {
      const context = createContext({
        firstName: 'Edgar',
        lastName: 'Carrillo',
        email: 'edgar.carrillo@thryv.com',
      })
      expect(response(context)).toBe('Edgar Carrillo')
    })

    test('If full name is provided & email is provided & phone is provided, return just the fullname', () => {
      const context = createContext({
        firstName: 'Edgar',
        lastName: 'Carrillo',
        email: 'edgar.carrillo@thryv.com',
        phoneNumber: '14076415494',
      })
      expect(response(context)).toBe('Edgar Carrillo')
    })

    test('If firstName or lastName is not a string, return unknown', () => {
      const context = createContext({
        firstName: {
          type: '',
          email: 'email@gmail.com',
        },
      })
      expect(response(context)).toBe('unknown')
    })
  })

  describe('Email Tests', () => {
    test('If only email is provided, return email', () => {
      const context = createContext({
        email: 'edgar.carrillo@thryv.com',
      })
      expect(response(context)).toBe('edgar.carrillo@thryv.com')
    })

    test('If only email && phone is provided, return email', () => {
      const context = createContext({
        email: 'edgar.carrillo@thryv.com',
        phoneNumber: '14076415494',
      })
      expect(response(context)).toBe('edgar.carrillo@thryv.com')
    })
  })

  describe('Phone Number Tests', () => {
    test('If only phone is provided, return phone', () => {
      const context = createContext({
        phoneNumber: '14076415494',
      })
      expect(response(context)).toBe('14076415494')
    })
  })

  describe('Completly undefined Tests', () => {
    test('If NOTHING is provided. Return - unknown', () => {
      const context = { result: { items: [] } }
      expect(response(context)).toBe('unknown')
    })
  })
})
