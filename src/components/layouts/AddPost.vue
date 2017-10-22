<template>
   <div v-if="show" id="create-post-modal" class="modal">
        <div class="modal-content">
            <div class="modal-content-header">
                <span @click="hideModal" class="close">&times;</span>
                <p>{{ lang.title }}</p>
            </div>
            <div class="modal-content-form">
                <form
                    @submit.stop.prevent="create"
                >
                    <div class="form-group">
                        <label for="modal-title">{{ lang.modal.title }}</label>
                        <input 
                            id="modal-title" 
                            type="text"
                            v-model="newPost.title"
                            >
                    </div>
            
                    <div class="form-group">
                        <label for="modal-content">{{ lang.modal.content }}</label>
                        <textarea 
                            id="modal-content"
                            cols="30"
                            rows="10"
                            v-model="newPost.content"
                            >
                            </textarea>
                    </div>
                    
                    <div class="form-btn">
                        <button class="btn-full btn-g">Save</button>                    
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddPost',
  data () {
    return {
      newPost: {},
      lang: {
        title: 'Add new post',
        modal: {
          title: 'Title',
          content: 'Content'
        }
      }
    }
  },
  computed: {
    show () {
      return this.$store.getters.isShowAddPost
    }
  },
  methods: {
    hideModal () {
      this.$store.dispatch('showAddPost', false)
    },
    create () {
      this.$http.post('/post', this.newPost)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }

  }
}
</script>
