const sortingByAge = require('./app');

test("testing if the first user is Jane Doe after sorting", () => {
    const sortedData = sortingByAge();

    expect(sortedData[0].name).toBe('Jane Doe');

});

test("testing if the last user is Jim Doe after sorting", () => {
    const sortedData = sortingByAge();

    expect(sortedData[sortedData.length - 1].name).toBe('Jim Doe');

});