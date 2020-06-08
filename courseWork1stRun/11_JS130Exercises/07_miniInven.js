"use strict";

const ItemCreator = (itemName, category, quantity) => {
  if (itemName.split(" ").join("").length < 5) return { notValid: true };
  if (category.length < 5 || category.split(" ").length > 1) {
    return { notValid: true };
  }
  if (quantity === undefined) return { notValid: true };
  const skuCode = (
    itemName.split(" ").join("").slice(0, 3) + category.slice(0, 2)
  ).toUpperCase();
  return {
    itemName,
    category,
    quantity,
    skuCode,
  };
};
const ItemManager = {
  items: [],

  create(name, category, quantity) {
    let item = ItemCreator(name, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
      return null;
    }
  },

  update(skuCode, obj) {
    const item = this.items.find((item) => item.skuCode === skuCode);
    Object.keys(obj).forEach((property) => {
      item[property] = obj[property];
    });
  },

  delete(skuCode) {
    const itemIndex = this.items.findIndex((item) => item.skuCode === skuCode);
    this.items.splice(itemIndex, 1);
    return this.items;
  },

  inStock() {
    const stockItems = this.items.filter((item) => item.quantity > 0);
    stockItems.forEach((item) => console.log(item));
  },

  itemsInCategory(category) {
    const inCategoryItems = this.items.filter(
      (item) => item.category === category
    );
    inCategoryItems.forEach((item) => console.log(item));
  },
};

const ReportManager = {
  init(itemManagerObj) {
    this.items = itemManagerObj;
  },

  createReporter(skuCode) {
    const item = this.items.items.find((item) => item.skuCode === skuCode);
    return {
      itemInfo: function () {
        Object.keys(item).forEach((key) => console.log(`${key}: ${item[key]}`));
      },
    };
  },

  reportInStock() {
    const stockedItems = this.items.items.filter((item) => item.quantity > 0);
    console.log(stockedItems);
    console.log(stockedItems.map((item) => item.itemName).join(", "));
  },
};

ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update("SOCSP", { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory("sports");

ItemManager.delete("SOCSP");
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
