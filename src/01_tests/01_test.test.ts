import {splitIntoWorlds, sum, mult} from "./01_test";

// 1) test(<Test name>, ()=>{})
// 2) ***data*** const = ...
// 3) ***action*** result = function (x, y)
// 4) ***expect result*** expect(result).toBe(z)

// Правила для Unit test,чем короче тем, лучше
// data - выносится выше тестов, если используется несколько раз

let a: number;
let b: number;
let c: number;

// перезатирает переменные перед каждым тестом
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    // data
    // const a = 1;
    // const b = 2;
    // const c = 3;

    // action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    // expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})
test('multiply should be correct', () => {
    // data
    // const a = 1;
    // const b = 2;
    // const c = 3;

    // action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    // expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})


test(("splitting into words should be correct"), () => {
    // data
    const sent1 = "Hello my friend"
    const sent2 = "Coding is so  good!"

    // action
    const result1 = splitIntoWorlds(sent1);
    const result2 = splitIntoWorlds(sent2);

    // expected result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

    expect(result2.length).toBe(4)
    expect(result2[0]).toBe("coding")
    expect(result2[1]).toBe("is")
    expect(result2[2]).toBe("so")
    expect(result2[3]).toBe("good")
})