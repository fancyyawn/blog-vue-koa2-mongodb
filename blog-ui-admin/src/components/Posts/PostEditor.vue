<template>
  <section>
    <markdown-editor
        v-model="content"
        ref="markdownEditor"
        preview-class="markdown-body"
        :configs="configs">
    </markdown-editor>
    <button id="btnSavePost" class="btn-hidden" @click="savePost">Save</button>
  </section>
</template>

<script>
  import { markdownEditor } from 'vue-simplemde'
  import 'github-markdown-css'

  export default {
    components: {
      markdownEditor
    },
    methods:{
      savePost(){
        console.log('save post!');
        this.parsePost(localStorage.getItem('smde_post'));
      },
      parsePost(post){
        let savedPost = {};
        savedPost.content = post;

        let titleStart = post.indexOf("#");
        let titleEnd = post.indexOf("\n", titleStart);
        savedPost.title = post.substring(titleStart+1, titleEnd).trim();

        let tagsStart = post.indexOf("@");
        let tagsEnd = post.indexOf("\n", tagsStart);
        let tags = post.substring(tagsStart, tagsEnd);
        savedPost.folder = tags.substring(2, tags.indexOf(")"));
        savedPost.tags = tags.substring(tags.indexOf("[")+1, tags.indexOf("]")).split(",");


        let excerptStart = post.indexOf("```excerpt");
        if(excerptStart!== -1){
          let exceprtEnd = post.indexOf("```", excerptStart+10);
          savedPost.excerpt = post.substring(excerptStart+11, exceprtEnd);
        }else{
          alert("excerpt missing!");
        }

        console.log(savedPost);
      }
    },
    data () {
      return {
        content: '',
        configs: {
          autosave: {
            enabled: true,
            delay: 1000,
            uniqueId: 'post'
          },
          status: false, // 禁用底部状态栏
          renderingConfig: {
            codeSyntaxHighlighting: true, // 开启代码高亮
            highlightingTheme: 'atom-one-light' // 自定义代码高亮主题，可选列表(https://github.com/isagalaev/highlight.js/tree/master/src/styles)
          },
          toolbar: [
              'link',
              'image',
              'table',
              'horizontal-rule',
              'preview',
              'side-by-side',
              'fullscreen',
              '|',
              {
                name: 'save',
                action: function(editor) {
                  console.log(editor);
                  document.getElementById("btnSavePost").click();
                },
                className: 'fa fa-save',
                title: '保存'
              },
          ]
        }
      }
    }
  }
</script>

<style>
  .btn-hidden{
    display: none;
  }
</style>