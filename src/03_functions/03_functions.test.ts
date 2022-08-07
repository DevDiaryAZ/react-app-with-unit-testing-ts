import {CityType, StudentType} from "../02_objects/02_objects";
import {
    addMoneyToBudget,
    addSkill, decreaseStaff,
    doesStudentLiveIn, increasedStaff,
    makeStudentActive,
    repairHouse,
} from "./03_functions";

let student: StudentType
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
    // student = {
    //     id: 1,
    //     "name": "Helen",
    //     age: 29,
    //     isActive: false,
    //     address: {
    //         streetTitle: "Sovetskaya 1",
    //         city: {
    //             title: "Minsk",
    //             countryTitle: "Belarus"
    //         }
    //
    //     },
    //     technologies: [
    //         {
    //             id: 1,
    //             title: "HTML"
    //         },
    //         {
    //             id: 2,
    //             title: "CSS"
    //         },
    //         {
    //             id: 3,
    //             title: "React"
    //         }
    //     ]
    // }
})

// test("new tech skill shoould be added to student", () => {
//     expect(student.technologies.length).toBe(3);
//     addSkill(student, "JS");
//     expect(student.technologies.length).toBe(4);
//     expect(student.technologies[3].title).toBe("JS");
//     expect(student.technologies[3].id).toBeDefined()
// })
//
// test("student should be active", () => {
//     expect(student.isActive).toBe(false)
//     makeStudentActive(student)
//     expect(student.isActive).toBe(true)
// })
//
// test("does student live in city", () => {
//     let res1 = doesStudentLiveIn(student, "New York")
//     let res2 = doesStudentLiveIn(student, "Minsk")
//     expect(res1).toBe(false)
//     expect(res2).toBe(true)
// })

// 01. создайте в отдельном файле функциюб чтобы тесты прошли

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});

test("House should be repared", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});

test("Staff should be decrease", () => {
    decreaseStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180);
});

test("Staff should be increased", () => {
    increasedStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(220);
});