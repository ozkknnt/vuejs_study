import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber"

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);
// Vue.directive("border", {
//   bind(el, binding, vnode) {
//     // ディレクティブに初めて対象の要素に紐付いたとき
//   },
//   inserted(el, binding, vnode) {
//     // 親Nodeに挿入されたとき
//   },
//   update(el, binding, vnode, oldvnode) {
//     // コンポーネントが更新されるたび、子コンポーネントが更新される前
//   },
//   componentUpdated(el, binding, vnode, oldvnode) {
//     // コンポーネントが更新されるたび、子コンポーネントが更新された後
//   },
//   unbind(el, binding, vnode) {
//     // ディレクティブが紐付いている要素から取り除かれたとき
//   }
// });

// 上記のbindとupdateの省略記法
Vue.directive("border", function(el, binding){});

new Vue({
  render: h => h(App),
}).$mount('#app')
