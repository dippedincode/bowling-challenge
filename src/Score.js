'use strict'

function Score() {
  this._score = 0;
};

Score.prototype.showScore = function() {
  return this._score;
};