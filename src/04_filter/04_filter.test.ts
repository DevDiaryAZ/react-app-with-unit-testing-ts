import {CityType} from "../02_objects/02_objects";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_filter";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                },
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                },
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                },
            },
        ],
        governmentBuildings: [
            {
                id: 1,
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                },

            },
            {
                id: 2,
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                },
            },
        ],
        citizenNumber: 1000000
    }
})

test("should take old men older than 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    // функция предикат
    // const predicate = (age: number) => age > 90

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)
})

test("should take courses chipper 160", () => {
    const courses = [
        {title: "css", price: 100},
        {title: "js", price: 200},
        {title: "react", price: 150}
    ]

    // функция предикат (принимает один элемент такого же типа как элемент внтри массива и возращает true или false)
    // const chipPredicate = (course: CoursesType) => course.price < 160

    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("css")
    expect(chipCourses[1].title).toBe("react")
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true}, {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
    expect(completedTasks[0].title).toBe('Milk')
    expect(completedTasks[1].title).toBe('Sugar')
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]

    const completedTasks = tasks.filter(task => !task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)
    expect(completedTasks[0].title).toBe('Bread')
    expect(completedTasks[1].title).toBe('Salt')
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})