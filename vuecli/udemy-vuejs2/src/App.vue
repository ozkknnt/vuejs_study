<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{myAnimation}}</p>

    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-if="!show" key="hello">こんにちは</p>
    </transition>


    <button @click="show = !show">切り替え</button>
    <br><br>
    <!-- javascriptをtransition -->
    <transition 
      @before-enter = "beforeEnter"
      @enter= "enter"
      @after-enter= "afterEnter"
      @enter-cancelled= "enterCancelled"
      @before-leave= "beforeLeave"
      @leave= "leave"
      @after-leave= "afterLeave"
      @leave-cancelled= "leaveCancelled"
    >
      <div class="circle" v-if="show"></div>
    </transition>


    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is= "myComponent"></component>
    </transition>

    <transition 
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shakeX"
      appear
    >
      <p v-if="show">hello</p>
    </transition>
    <transition 
      :name="myAnimation"
      appear
    >
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      myComponent: "ComponetA"
    };
  },
  methods: {
    beforeEnter(){},
    enter(){},
    afterEnter(){},
    enterCancelled(){},
    beforeLeave(){},
    leave(){},
    afterLeave(){},
    leaveCancelled(){},
  }
}
</script>

<style scoped>
.circle{
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.fade-enter{
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active{
  /* 現れる時のトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to{
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave{
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active{
  /* 消える時のトランジションの状態 */
  transition: opacity 0.5s;

}
.fade-leave-to{
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter{

}
.slide-leave-to{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 0.5s;
  transition: opacity 5s;
}
.slide-leave-active{  
  animation: slide-in 0.5s reverse;
  transition: opacity 5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to{
    transform: translateX(0);
  }
}


.main {
  width: 70%;
  mergin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>