<template>
  <div>
    <p>いいね({{number / 2}})</p>
    <button @click="increment">+1</button>
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
  props: [ "number" ],
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

