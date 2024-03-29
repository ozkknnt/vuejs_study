export const tokyoNumber = {
  data() {
    return {
      tmpData: "hello",
      title:"Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
      number: 0
    };
  },
  computed: {
    upperCaseTitle(){
      return this.title.toUpperCase();
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log("created in Mixin")
  }
}