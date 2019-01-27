import {Unit} from './Unit.js';

export class Knight extends Unit {
  constructor({x, y}) {
    super({
      minHealth: 30,
      maxHealth: 30,
      x,
      y
    });
  }

  attack(unit) {
    if (this.isCanAttack(unit)) {
      console.log('Attacking!!!');
      unit.health -= this._getRandomInt(5, 10);
    } else {
      throw new Error('Out of distance!!!');
    }
  }

  isCanAttack(unit) {
    return Math.abs(unit.x - this.x) <= 2 && Math.abs(unit.y - this.y) <= 2;
  }
}