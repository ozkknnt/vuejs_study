<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number = "number" @my-click="number = $event"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <!-- <About v-if="currentComponent ==='About'"></About> -->
    <!-- <Home v-if="currentComponent ==='Home'"></Home> -->
    
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input 
        id="title" 
        type="text"
        v-model.lazy="eventData.title"
      >
      <p>{{eventData.title}}</p>

      <label for="maxNumber">最大人数</label>
      <input 
        id="maxNumber" 
        type="text"
        v-model.number="eventData.maxNumber"
      >
      <p>{{typeof eventData.maxNumber}}</p>
    </div>
  
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number:10,
      currentComponent: "Home",
      eventData:{
        title: "タイトル",
        maxNumber: 0

      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  }
}
</script>