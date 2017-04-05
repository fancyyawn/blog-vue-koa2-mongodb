<template>
  <ul class="post-list reset-list">
    <li class="post-list-item" v-for="post in postList">
      <article class="post-thumb">
        <h3 class="post-title">
          <router-link :to="{name: 'PostDetail', params: {id: post.id} }">
            {{post.title}}
          </router-link>
        </h3>
        <h6 class="post-time">{{post.lastEditTime}}</h6>
        <p class="post-excerpt">
          {{post.excerpt}}
        </p>
      </article>
    </li>
  </ul>
</template>

<script>
  export default{
    data(){
      return {
        postList: [
          {
            id: 1,
            title: 'post title',
            excerpt: 'post excerpt',
            content: 'post content',
            lastEditTime: '2017-03-04 11:11:11'
          },
          {
            id: 2,
            title: 'post2 title',
            excerpt: 'post2 excerpt',
            content: 'post2 content',
            lastEditTime: '2017-03-05 11:11:11'
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .post-list{
    border-top: 1px solid #ececec;
  }
  .reset-list{
    list-style: none;
    padding-left: 0;
  }
  .post-list-item {
    cursor: pointer;
    margin: 0 25px;
    padding: 20px 0;
    border-bottom: 1px solid #ececec;
  }
  .post-thumb{
    padding-left: 5px;
  }
  .post-title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    line-height: 1.3;
    font-weight: 400;
    margin: 0 0 4px;
    padding-bottom: 0;
  }
  .post-time{
    color: #7f8c8d;
    margin: 0 0 6px;
  }
  .post-excerpt{
    color: #7f8c8d;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    margin: 0;
    overflow: hidden;
    word-wrap: break-word;
    max-height: 20px;
  }
</style>