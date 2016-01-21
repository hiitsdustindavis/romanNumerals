// describe('romnum', function() {
//   it("will convert '1' to 'I'", function() {
//     expect(romnum("1")).to.equal("I");
//   });
//   it("will convert '5' to 'V'", function() {
//     expect(romnum("5")).to.equal("V");
//   });
// });

describe('toRoman', function() {
  it("will convert '5' to 'V'", function() {
    expect(toRoman("5")).to.equal("V");
  });
  it("will convert '10' to 'X'", function() {
    expect(toRoman("10")).to.equal("X");
  });
  it("will convert '14' to 'XIV'", function() {
    expect(toRoman("14")).to.equal("XIV");
  });
});
