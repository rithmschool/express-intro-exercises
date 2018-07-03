class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Item.id;
    Item.list.push(this);
    Item.id++;
  }
  static update(id, data) {
    let foundItem = Item.list.find(v => v.id === id);
    foundItem.name = data.name;
    foundItem.price = data.price;
    return foundItem;
  }
  static find(id) {
    return Item.list.find(v => v.id === id);
  }
  static remove(id) {
    let foundIdx = Item.list.findIndex(v => v.id === id);
    Item.list.splice(foundIdx, 1);
  }
}

Item.id = 1;
Item.list = [];

module.exports = Item;
