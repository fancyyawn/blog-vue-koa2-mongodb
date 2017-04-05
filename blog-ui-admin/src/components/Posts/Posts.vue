<template>
  <div class="container-with-aside">
    <nav-aside></nav-aside>
    <section class="post-list-column">
      <h3 class="page-title">
        <i class="icon-wenzhang iconfont"></i>
        文章列表
        <i class="iconfont icon-jiahao post-add" @click="createPost"></i>
      </h3>
      <post-list></post-list>
    </section>
    <div class="post-edit" v-if="currentPostId">
      <post-editor></post-editor>
    </div>
  </div>
</template>

<script>
  import NavAside from './NavAside.vue'
  import PostEditor from './PostEditor.vue'
  import PostList from './PostList.vue'

  export default{
    data(){
      return {
        currentPostId: this.$route.params.id
      }
    },
    components: {
      NavAside,
      PostList,
      PostEditor
    },
    methods:{
      createPost(){
        this.currentPostId = '1';
        console.log('create post');
      }
    },
    watch: {
      '$route' (to, from) {
        this.currentPostId = this.$route.params.id
      }
    }
  }

</script>

<style scoped>
  .container-with-aside{
    margin-left: 70px;
    height: 100%;
  }
  .post-list-column{
    float: left;
    border-right: 1px solid #ececec;
    height: 100%;
    width: 250px;
    overflow-y: auto;
  }
  .post-add{
    cursor: pointer;
    float: right;
    margin-right: 10px;
    margin-top: 2px;
  }
  .page-title{
    color: #7f8c8d;
    padding-left: 25px;
    font-weight: 400;
  }
  .post-edit{
    overflow: auto;
    height: 100%;
  }
</style>