const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Alfonso",
      classVisible: "visible",
      index: 0,
      imgSrc: [
        "../img/01.webp",
        "../img/02.webp",
        "../img/03.webp",
        "../img/04.webp",
        "../img/05.webp",
      ],
    };
  },
  methods: {
    indexIncrease() {
      this.index;
      return index++;
    },

    indexDecrease() {
      this.index;
      return index--;
    },
  },
}).mount("#app");

function indexIncrease() {
  return index++;
}

function indexDecrease() {
  return index--;
}
