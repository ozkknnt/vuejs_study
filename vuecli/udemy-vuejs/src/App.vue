<template>
  <div>
    <LikeHeader>
      <!-- 名前がついていないものはまとめてtemplateタグをつけているdefaultという名のv-slot -->
      <h3>デフォルトslot一番上 </h3>

      <!-- slotプロパティ -->
      <template v-slot:title="slotProps">
        <h1>こんにちは</h1>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>
      <!-- template v-slot指定していないためデフォルトslotに表示される -->
      <h3>デフォルトslot</h3>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
      <h3>デフォルトslot3</h3>
      <!--  -->
      <template #title></template>
      
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
      number:10,
      title: "title"
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
