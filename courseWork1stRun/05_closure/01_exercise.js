"strict mode";

function makeMultipleLister(num) {
  return function numFixedLister() {
    let multipled = num;
    while (true) {
      if (multipled >= 100) break;
      console.log(multipled);
      multipled += num;
    }
  };
}

let lister = makeMultipleLister(17);
lister();
