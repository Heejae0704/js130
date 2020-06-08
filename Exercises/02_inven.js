const ItemManager = (function () {
  function itemNameValidation(itemName) {
    return itemName.split(" ").join("").length >= 5;
  }

  function categoryValidation(categoryName) {
    return categoryName.split(" ").length === 1 && categoryName.length >= 5;
  }

  function quantityValidation(quantity) {
    return quantity !== undefined;
  }

  function generateSKUcode(itemName, categoryName) {
    return (
      itemName.split(" ").join("").slice(0, 3) + categoryName.slice(0, 2)
    ).toUpperCase();
  }

  return {
    items: [],
    create(itemName, categoryName, quantity) {
      if (
        itemNameValidation(itemName) &&
        categoryValidation(categoryName) &&
        quantityValidation(quantity)
      ) {
        const item = {
          skuCode: generateSKUcode(itemName, categoryName),
          itemName: itemName,
          category: categoryName,
          quantity: quantity,
        };

        this.items.push(item);
      } else return false;
    },

    update(skuCode, object) {
      const item = this.items.find((item) => item.skuCode === skuCode);
      Object.assign(item, object);
    },

    delete(skuCode) {
      const item = this.items.find((item) => item.skuCode === skuCode);
      this.items.splice(this.items.indexOf(item), 1);
    },

    inStock() {
      return this.items.filter((item) => item.quantity > 0);
    },

    itemsInCategory(category) {
      return this.items.filter((item) => item.category === category);
    },
  };
})();

const ReportManager = {
  init(obj) {
    this.items = obj;
  },

  createReporter(skuCode) {
    return function () {
      const selectedItem = this.items.items.find(
        (item) => item.skuCode === skuCode
      );
      return {
        itemInfo() {
          Object.keys(selectedItem).forEach((key) => {
            console.log(`${key}: ${selectedItem[key]}`);
          });
        },
      };
    }.bind(this)();

    // const selectedItem = this.items.items.find(
    //   (item) => item.skuCode === skuCode
    // );
    // return {
    //   itemInfo() {
    //     Object.keys(selectedItem).forEach((key) => {
    //       console.log(`${key}: ${selectedItem[key]}`);
    //     });
    //   },
    // };
  },

  reportInStock() {
    let inStockItems = [];
    this.items.items
      .filter((item) => item.quantity)
      .forEach((item) => inStockItems.push(item.itemName));
    console.log(inStockItems.join(", "));
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
// returns list the remaining 3 valid items
// (soccer ball is removed from the list)
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

let anotherReporter = ReportManager.createReporter("FOOSP");
anotherReporter.itemInfo();

kitchenPotReporter.itemInfo();
