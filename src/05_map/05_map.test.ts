import {
    createGreetingMessages, createGreetingMessagesForStreet,
    getStreetsTitlesOfGovernmentBuildings,
    getStreetsTitlesOfHouses,
    ManType
} from "./05_map";
import {CityType} from "../02_objects/02_objects";

let people: ManType[]
let city: CityType

beforeEach(() => {
        people = [
            {name: "Ivan Ivanov", age: 33},
            {name: "Alex Smith", age: 24},
            {name: "Sveta Orlova", age: 18}
        ]
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
    }
)


test("should get array of greeting messages", () => {
    let messages = createGreetingMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Ivan! Welcome!')
    expect(messages[1]).toBe('Hello Alex! Welcome!')
    expect(messages[2]).toBe('Hello Sveta! Welcome!')
})

test('list of streets titles of government buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})

test("should greeting messages for street", () => {
    let messages = createGreetingMessagesForStreet(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello man from White street! Welcome!')
    expect(messages[1]).toBe('Hello man from Happy street! Welcome!')
    expect(messages[2]).toBe('Hello man from Happy street! Welcome!')
})