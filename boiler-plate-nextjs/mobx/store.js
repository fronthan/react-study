const { observable } = require("mobx");
const userStore = observable({
  name: "한민정",
  email: "cynthia0330@kakao.com",
  title: "",
  nameChange() {
    this.name = "이름이 바뀐다"
  }
})

export { userStore };