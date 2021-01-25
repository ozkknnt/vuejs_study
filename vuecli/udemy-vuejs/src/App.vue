<template>
  <div>
    <LikeHeader>
      <!-- 名前がついていないものはまとめてtemplateタグをつけているdefaultという名のv-slot -->
      <h3>デフォルトslot一番上 </h3>
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <!-- template v-slot指定していないためデフォルトslotに表示される -->
      <h3>デフォルトslot</h3>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
      
    </LikeHeader>
    <LikeNumber :total-number = "number" v-on:my-click="number = $event"></LikeNumber>
    <!-- v-on:my-click="number = $event" のnumber 以降はJavascript -->
    <LikeNumber :total-number = "number" test-props = "test"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number:10
    };
  },
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
