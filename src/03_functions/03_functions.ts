import {CityType, GovernmentBuildingsType, HousesType, student, StudentType} from "../02_objects/02_objects";

const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}
export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, newBudget: number) => {
    building.budget += newBudget
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}

export function decreaseStaff (building: GovernmentBuildingsType, value:number) {
    building.staffCount -= value
}

export function increasedStaff (building: GovernmentBuildingsType, value:number) {
    building.staffCount += value
}