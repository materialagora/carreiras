import array from "utils/array";

describe(array, () => {
  it("Should exclude item", () => {
    const list = [
      {
        id: 1,
        name: "example 1",
      },
      {
        id: 2,
        name: "example 2",
      },
      {
        id: 3,
        name: "example 3",
      },
    ];

    const result = array().excluded(list, [2]);
    expect(result.length).toBe(2);
  });
});
