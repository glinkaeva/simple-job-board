import { createContext } from "react";

export type GlobalContent = {
  currentVacancy: {
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    salary: string,
    address: string,
    benefits: Array<string>,
    location: {
      lat: number,
      long: number,
    }
    pictures: Array<string>,
    createdAt: string,
    updateAt: string,
    description: string,
    employment_type: Array<string>,
  }
  setValue:(e: object) => void
}
const CurrentVacancies = createContext<GlobalContent>(null)

export default CurrentVacancies;