import {Orc} from './Orc.js';
import {Knight} from './Knight.js';
import {Mage} from './Mage.js';

function Game() {
  var orc1 = new Orc({
    x: 0,
    y: 2
  });
  var first =document.querySelector(".block1");
first=orc1;
first.move({
  offsetX: 0,
  offsetY: 4
});

  const orc2 = new Orc({
    x: 0,
    y: 4
  });

  orc1.debug();
  orc2.debug();

  orc1.move({
    offsetX: 0,
    offsetY: 1
  });

  orc1.attack(orc2);

  orc1.debug();
  orc2.debug();



  const knight1 = new Knight({
    x: 0,
    y: 2
  });

  const knight2 = new Knight({
    x: 0,
    y: 4
  });

  knight1.debug();
  knight2.debug();

  knight1.move({
    offsetX: 0,
    offsetY: 1
  });

  knight1.attack(knight2);

  knight1.debug();
  knight2.debug();

  const mage1 = new Mage({
    x: 0,
    y: 2
  });

  const mage2 = new Mage({
    x: 0,
    y: 4
  });

  mage1.debug();
  mage2.debug();

  mage1.move({
    offsetX: 0,
    offsetY: 1
  });

  mage1.attack(mage2);

  mage1.debug();
  mage2.debug();

}


new Game();