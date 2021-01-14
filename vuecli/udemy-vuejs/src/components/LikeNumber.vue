<template>
  <div>
    <p>いいね({{ halfNumber / 2}})</p>
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
      this.number +=1; 
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>

