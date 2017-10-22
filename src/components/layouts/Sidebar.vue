<template>
  <aside>
        <div class="cl-3-v nav-item">
            <a href="#" @click.prevent="addPost">
                <img src="./../../assets/img/add.png" alt="">
            </a>
        </div>
        <div class="cl-3-v nav-item">
            <a href="#">
                <img src="./../../assets/img/alb1.png" alt="">
            </a>
        </div>
        <div class="cl-3-v nav-item">
            <a href="#">
                <img src="./../../assets/img/alb1.png" alt="">
            </a>
        </div>
    </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    addPost () {
      this.$store.dispatch('showAddPost', true)
    }
  }
}
</script>
