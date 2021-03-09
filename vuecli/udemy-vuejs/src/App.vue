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
    
    <div style="padding:10rem;">
      <h2>イベントのフォーム</h2>
      <!-- .lazy修飾子 -->
      <label for="title">タイトル</label>
      <input 
        id="title" 
        type="text"
        v-model.lazy="eventData.title"
      >
      <pre>{{eventData.title}}</pre>

      <!-- .number修飾子 -->
      <label for="maxNumber">最大人数</label>
      <input 
        id="maxNumber" 
        type="text"
        v-model.number="eventData.maxNumber"
      >
      <p>{{eventData.maxNumber}}</p>

      <!-- .trim修飾子 -->
      <label for="host">主催者</label>
      <input 
        id="host" 
        type="text"
        v-model.trim="eventData.host"
      >
      <pre>{{eventData.host}}</pre>
      
      <!-- 複数行データバインディング -->
      <label for="detail">イベントの内容</label>
      <textarea 
        id="detail" 
        rows="10" 
        cols="30" 
        v-model="eventData.detail">
      </textarea>
      <p style="white-space: Pre;">{{eventData.detail}}</p>

      <!-- 単体のcheckboxの双方向データバインディング -->
      <input 
        type="checkbox" 
        id="isPrivate"
        v-model= "eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>

      <!-- 複数のcheckboxの双方向データバインディング -->
      <p>参加条件</p>
      <input 
        type="checkbox"
        id="10"
        value="10代"
        v-model="eventData.target"
      >
      <label for="10">10代</label>
      
      <input 
        type="checkbox"
        id="20"
        value="20代"
        v-model="eventData.target"
      >
      <label for="20">20代</label>

      <input 
        type="checkbox"
        id="30"
        value="30代"
        v-model="eventData.target"
      >
      <label for="30">30代</label>

      <p>{{eventData.target}}</p>

      <!-- ラジオボタンの双方向バインディング  -->
      <p>参加費</p>
      <input 
        type="radio" 
        id="free"
        value="無料"
        v-model ="eventData.price"
      >
      <label for="free">無料</label>

      <input 
        type="radio" 
        id="free"
        value="有料"
        v-model ="eventData.price"
      >
      <label for="paid">有料</label>
      <p>{{eventData.price}}</p>

      <!-- セレクトボックスの双方向バインディング -->
      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option 
          v-for="location in locations" 
          :key="location"
        >{{location}}
        </option>
      </select>
      <p>{{eventData.location}}</p>

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
      locations: ["東京","大阪","名古屋"],
      eventData:{
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: []

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