<template>
  <div>
    <header class="banner">
      <img src="../assets/img/logo.png" class="banner-logo" alt="logo">
    </header>
    <div class="center-box">
      <div class="flash-bar danger" v-show="loginErr">
        登录失败 {{loginErrMsg}}
      </div>
      <section class="login-box">
        <div class="login-header">
          <h3>博客后台登录</h3>
        </div>
        <div class="login-body">
          <input type="text" class="form-control top" placeholder="username"
                 v-model="username"/>
          <input type="password" class="form-control bottom" placeholder="password"
                 v-model="password" @keyup.13="login"/>
        </div>
        <div class="login-footer">
          <div class="login-button-container">
            <button class="btn btn-save btn-block" @click="login">登录</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data: ()=>({
      username: '',
      password: '',
      loginErr: true,
      loginErrMsg: '.....'
    }),
    methods: {
      login(){
        console.log('login...');
      }
    }
  }
</script>

<style scoped>
  .banner{
    padding: 10px 0px;
    text-align: center;
    border-bottom: 1px solid #EEE;
    margin-bottom: 20px;
  }
  .banner .banner-logo{
    height: 50px;
  }
  .center-box{
    max-width: 400px;
    margin: 0 auto;
    padding: 32px 15px;
  }

  .flash-bar{
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 6px;
    margin-bottom: 10px;
  }
  .danger{
    background-color: #ff6666;
    text-align: center;
  }

  .login-box{
    background: #fafafa;
    border-radius: 10px;
    box-shadow: 0 0px 2px #CCC;
    padding: 15px;
  }
  .login-header{
    text-align: center;
    line-height: 1.5;
    margin: 0 0 10px 0;
  }
  .login-button-container{
    width: 200px;
    margin: 0 auto;
  }
  .form-control{
    color: #4a4a4a;
    box-sizing: border-box;
    padding: 10px 8px;
    width: 100%;
    height: auto;
    box-shadow: none;
    border: 1px solid #ececec;
    background-color: #fff;
    outline: 0;
  }

  .form-control,.top{
    border-radius: 5px 5px 0 0;
    margin-bottom: 0;
  }
  .form-control,.bottom{
    border-radius: 0 0 5px 5px;
    border-top: 0;
    margin-bottom: 20px;
  }

  .btn {
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 6px 10px;
    text-align: center;
    vertical-align: middle;
    outline: 0;
  }
  .btn-save{
    color: #fff;
    background-color: #42b983;
    border-color: #42b983;
  }
  .btn-block{
    width: 100%;
    box-sizing: border-box;
  }

</style>