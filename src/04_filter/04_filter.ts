import {CityType, GovernmentBuildingsType} from "../02_objects/02_objects";

const ages = [18, 20, 22, 1, 100, 90, 14];

const oldAges = [100]; // > 90

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "css", price: 100},
    {title: "js", price: 200},
    {title: "react", price: 150}
]

const chipPredicate = (course: CoursesType) => {
    return course.price < 160
}

export const demolishHousesOnTheStreet = (city:CityType, street:string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(governmentBuildings:GovernmentBuildingsType[], number: number){
    return governmentBuildings.filter(el => el.staffCount > number)
}
