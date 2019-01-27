import {Unit} from './Unit.js';

export class Mage extends Unit {
  constructor({x, y}) {
    super({
      minHealth: 5,
      maxHealth: 10,
      x,
      y
    });
  }

  attack(unit) {
    if (this.isCanAttack(unit)) {
      console.log('Attacking!!!');
      unit.health -= 3;
    } else {
      throw new Error('Out of distance!!!');
    }
  }

  isCanAttack(unit) {
    return Math.abs(unit.x - this.x) <= 10 && Math.abs(unit.y - this.y) <= 10;
  }
}