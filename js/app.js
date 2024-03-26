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
      this.index++;
      console.log(this.index);
    },

    indexDecrease() {
      this.index--;
      console.log(this.index);
    },
  },
}).mount("#app");
