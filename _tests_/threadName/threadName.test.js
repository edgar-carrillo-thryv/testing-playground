import { response } from "./threadName"
import { createContext } from "./utils/createContext"

describe("Test threadName response resolver", () => {
  describe("Unknown Name Tests", () => {
    test("Returns correct full name", () => {
      const context = createContext({
        firstName: "Ryan",
        lastName: "Cantor",
      })
      expect(response(context)).toBe("Ryan Cantor")
    })

    test("Returns unknown when firstname & lastname are unknown regardless of casing", () => {
      const context = createContext({
        firstName: "UnkNown",
        lastName: "Unknown",
      })
      expect(response(context)).toBe("unknown")
    })

    test("Returns firstname if lastname is unknown regardless of casing", () => {
      const context = createContext({
        firstName: "Ryan",
        lastName: "UnkNown",
      })
      expect(response(context)).toBe("Ryan")
    })

    test("Returns firstname if lastname is unknown regardless of casing", () => {
      const context = createContext({
        firstName: "UnkNown",
        lastName: "Cantor",
      })
      expect(response(context)).toBe("Cantor")
    })

    test("Returns firstname if lastname is undefined", () => {
      const context = createContext({
        firstName: "Ryan",
      })
      expect(response(context)).toBe("Ryan")
    })

    test("Returns lastname if firstname is undefined", () => {
      const context = createContext({
        lastName: "Cantor",
      })
      expect(response(context)).toBe("Cantor")
    })

    test("Returns unknown if firstname && lastname is undefined", () => {
      const context = createContext({})
      expect(response(context)).toBe("unknown")
    })
  })

  describe("Name Tests", () => {})
})
