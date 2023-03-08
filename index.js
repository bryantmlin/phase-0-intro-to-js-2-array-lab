const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats,name];
}

function prependCat(name) {
    return [name,...cats];
}

function removeLastCat() {
    return cats.slice(0,cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1);
}
/*



  describe('removeLastCat()', function () {
    it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
      expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('removeFirstCat()', function () {
    it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
      expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

      expect(cats).to.have.ordered.membe
      */
