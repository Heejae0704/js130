class Garden {
  static DEFAULT_STUDENTS = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Fred",
    "Ginny",
    "Harriet",
    "Ileana",
    "Joseph",
    "Kincaid",
    "Larry",
  ];
  static PLANTS = {
    G: "grass",
    C: "clover",
    R: "radishes",
    V: "violets",
  };
  constructor(diagram, students) {
    const [windowStr, insideStr] = diagram.split("\n");
    let plantArr = [];
    for (let idx = 0; idx < windowStr.length; idx += 2) {
      plantArr.push([
        windowStr[idx],
        windowStr[idx + 1],
        insideStr[idx],
        insideStr[idx + 1],
      ]);
    }

    this.students = students ? students.sort() : Garden.DEFAULT_STUDENTS;
    this.students.forEach((student, idx) => {
      const propertyName = student.toLowerCase();
      if (idx < plantArr.length) {
        this[propertyName] = plantArr[idx].map((char) => Garden.PLANTS[char]);
      }
    });
  }
}

module.exports = Garden;
