<template>
  <aside class="sidebar">
    <img class="sidebar-logo" src="../../assets/logo.png"/>
    <nav class="aside-menu">
      <ul class="aside-nav-list">
        <li class="aside-nav-item">
          <a class="aside-nav-button" @click="deleteToken()">
            <i class="icon-icon11 iconfont"></i>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  export default{
    methods:{
      deleteToken(){
        console.log('delete token');
      }
    }
  }
</script>

<style>
  .sidebar{
    box-sizing: border-box;
    border-right: 1px solid #ececec;
    background-color: #f8f8f8;
    text-align: center;
    color: white;
    position: fixed;
    height: 100%;
    width: 55px;
    padding: 12px 12px 24px 12px;
    left: 0;
    top: 0;
  }
  .sidebar-logo{
    margin-top: 5px;
    width: 36px;
  }
  .aside-menu{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .aside-nav-list{
    list-style: none;
    padding: 0;
  }
  .aside-nav-item{
    padding: 20px 0;
  }
  .aside-nav-button{
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    width: 45px;
    height: 45px;
    background: #fff;
    padding: 0;
    padding-top: 10px;
    border: 1px solid #ececec;
    border-radius: 50%;
    color: #42b983;
  }

</style>