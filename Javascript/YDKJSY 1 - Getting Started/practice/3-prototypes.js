/* ***PROTOTYPES PRACTICE*** */

/*
Define a slot machine with three reels that can individually spin(), and then display() the current contents of all the reels.
The basic behavior of a single reel is defined in the reel object below. 

But the slot machine needs individual reels objects that delegate to reel, and which each have a position property.

A reel only knows how to display() its current slot symbol, but a slot machine typically shows three symbols per reel:
the current slot (position), one slot above (position - 1), and one slot below (position + 1).
So displaying the slot machine should end up displaying a 3 x 3 grid of slot symbols.
*/

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    const symbols = [[], [], []];
    this.reels.forEach((reel, index) => {
      const reelPosition = reel.position;

      const prevSymbol = Object.create(reel);
      prevSymbol.position = reelPosition === 0 ? 7 : reelPosition - 1;
      const nextSymbol = Object.create(reel);
      nextSymbol.position = reelPosition === 7 ? 0 : reelPosition + 1;

      symbols[index].push(prevSymbol.display());
      symbols[index].push(reel.display());
      symbols[index].push(nextSymbol.display());
    });

    let displayString = '';
    for (let index of [0, 1, 2]) {
      displayString += ` ${symbols[0][index]} | ${symbols[1][index]} | ${symbols[2][index]} \n`;
    }

    console.log(displayString);
  },
};

slotMachine.spin();
slotMachine.display();
// < | @ | *
// @ | X | <
// X | Y | @

slotMachine.spin();
slotMachine.display();
// Z | X | W
// W | Y | $
// $ | Z | *
