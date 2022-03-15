<template>
    <div id="loginBg" class="loginBg">
        <div class="container">
            <div class="loginContent">
                <div class="loginBodyMain">
                    <div class="title">登录页</div>
                    <div class="loginUser">
                        <i class="userImg"></i>
                        <input type="text" placeholder="用户名" value id="userName" v-model="userName" />
                    </div>
                    <div class="loginPass">
                        <i class="passwordImg"></i>
                        <input
                            type="password"
                            placeholder="密   码"
                            value
                            id="passwordName"
                            v-model="password"
                        />
                    </div>
                    <button class="loginGo" @click="onLoginBtnClick()">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from './model';

export default {
  name: 'Login',
  data() {
    return {
      userName: null,
      password: null,
    };
  },
  methods: {
    async onLoginBtnClick() {
      try {
        await login(this.userName, this.password);
        this.$router.push('/');
      } catch ({ message }) {
        alert(message);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s;
}
.flip-list-enter,
.flip-list-leave-active {
  opacity: 0;
}

#loginBg {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
  background: url('../../assets/image/login/bg.png') no-repeat;
  background-size: 100% 100%;
  justify-content: flex-end;
  align-items: center;
}
.logos {
  width: 100%;
  height: 100%;
  display: flex;
}

.logos img {
  height: 35px;
  margin-left: 60px;
  margin-top: 35px;
}
.imglogo {
  position: absolute;
  right: 6%;
  height: 30px !important;
}
.kouhao {
  position: absolute;
  right: 7%;
  top: 12%;
}
.kouhao img {
  height: 200px;
}
.container .flip-lists {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.loginContent {
  display: flex;
  width: 350px;
  height: 336px;
  border-radius: 4px;
  border: 2px solid #fff;
  margin-right: 5%;
}
.loginBodyMain {
  width: 280px;
  margin: 0 auto;
  height: 265x;
  margin-top: 20px;
}
.title {
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
  border-bottom: 2px solid #fff;
}
.loginUser,
.loginPass {
  width: 100%;
  height: 45px;
  margin-bottom: 12px;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  margin-top: 15px;
  opacity: 0.9;
}
.userImg,
.passwordImg {
  display: inline-block;
  width: 50px;
  height: 45px;
  position: absolute;
  background: url('../../assets/image/login/user.png') no-repeat;
  background-size: 48% 51%;
  background-position: 49% 46%;
}
.passwordImg {
  background: url('../../assets/image/login/password.png') no-repeat;
  background-size: 45% 56%;
  background-position: 47% 50%;
}
#userName,
#passwordName {
  display: inline-block;
  width: calc(100% - 49px);
  height: 45px;
  margin-left: 50px;
  border: transparent;
  border-top-right-radius: 4px;
  outline: none;
  font-size: 16px;
  text-indent: 1em;
  border: none;
}
.verificationCodeBox {
  display: flex;
}
#verificationCode {
  display: inline-block;
  width: calc(100% - 49px);
  height: 45px;
  border: transparent;
  border-top-right-radius: 4px;
  outline: none;
  font-size: 16px;
  text-indent: 1em;
  border: none;
}
.loginGo {
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 17px;
  background-color: #0a457f;
  color: #fff;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  outline: none;
  opacity: 0.9;
}
.loginLi {
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#t1 {
  display: block;
  width: 48%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #686868;
  font-size: 16px;
}
#t1[type='text'] {
  font-size: 16px;
  text-indent: 1em;
}
#t1:focus {
  font-size: 18px;
}
#discode {
  display: block;
  width: 100%;
  height: 45px;
  text-align: center;
}
</style>
