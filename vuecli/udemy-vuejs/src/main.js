import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber"

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", function (value) {
  return value.toUpperCase();
});
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


// グローバルのカスタムディレクティブ
// Vue.directive("border", function (el, binding) {
//   // el.style.border = "solid black 2px";
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   if (binding.modifiers.round) {
//     el.style.borderRadius = "0.5rem"
//   }
//   if (binding.modifiers.shadow) {
//     el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)"
//   }
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
