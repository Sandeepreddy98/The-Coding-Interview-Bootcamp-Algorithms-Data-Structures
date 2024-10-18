function levelWidth(root) {
  let counters = [0];
  let array = [root, "s"];
  while (array.length > 1) {
    const node = array.shift();
    if (node === "s") {
      counters.push(0);
      array.push("s");
    } else {
      array.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}
let array = {
  data: 0,
  children: [
    {
      data: 1,
      children: [
        {
          data: 4,
          children: [],
        },
      ],
    },
    {
      data: 2,
      children: [],
    },
    {
      data: 3,
      children: [
        {
          data: 5,
          children: [],
        },
      ],
    },
  ],
};
console.log(levelWidth(array));
