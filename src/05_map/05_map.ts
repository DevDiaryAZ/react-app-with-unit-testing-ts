import {GovernmentBuildingsType, HousesType} from "../02_objects/02_objects";
import exp from "constants";

export type  ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: "Ivan Ivanov", age: 33},
    {name: "Alex Smith", age: 24},
    {name: "Sveta Orlova", age: 18}
]

const tranform = (man: ManType) => {
    return {
        stack: ["css", "html", "js", "css", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

let d1 = tranform(people[0])
let d2 = tranform(people[1])
let d3 = tranform(people[2])

const devs2 = [
    tranform(people[0]),
    tranform(people[1]),
    tranform(people[2])
]

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}! Welcome!`)

// инкапсуляция в функцию
export const createGreetingMessages = (people: ManType[]) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}! Welcome!`)
}

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: GovernmentBuildingsType[]) => {
    return governmentBuildings.map(el => el.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: HousesType[]) {
    return houses.map(el => el.address.street.title)
}

export const createGreetingMessagesForStreet = (houses: HousesType[]) => {
    return houses.map(el => `Hello man from ${el.address.street.title}! Welcome!`)
}