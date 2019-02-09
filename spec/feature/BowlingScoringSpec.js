'use strict'

describe("BowlingScoring", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  it("should have an initial value of 0", function() {
    expect(score.showScore()).toEqual(0);
  });

});
