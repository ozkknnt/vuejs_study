<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
    <p>{{ testProps }}</p>
  </div>
</template>


<script>
//ES6の書き方
// export default {
//   data() {
//     return {number: 6
//     };
//   }
// }
//ES５の書き方
export default {
  //props: ["totalNumber", "testProps"]
  props: {
    totalNumber: { // バリデーションができる
      type: Number,  //型指定
      //required: true, //必須
      default: 100
    },
    testProps: {
      type: String
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods:{
    increment() {
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>

