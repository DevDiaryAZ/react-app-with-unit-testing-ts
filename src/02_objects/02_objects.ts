// city types
type StreetType = {
    title: string
}
type HouseAddressType = {
    number?: number
    street: StreetType
}
export type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: HouseAddressType
}
export type GovernmentBuildingsType = {
    id: number
    type: string
    budget: number
    staffCount: number
    address: HouseAddressType
}
export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizenNumber: number
}

// student types
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string,
    city: LocalCityType
}
type TechnologiesType = {
    id: number
    title: string

}
export type  StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean,
    address: AddressType
    technologies: TechnologiesType[]
}

export const student: StudentType = {
    id: 1,
    "name": "Helen",
    age: 29,
    isActive: false,
    address: {
        streetTitle: "Sovetskaya 1",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }

    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
