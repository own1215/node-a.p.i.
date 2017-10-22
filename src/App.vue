<template>
  <div id="app">
    <main>
      <app-header/>
      <div class="container">
        <router-view/>
      </div>
    </main>
    <app-sidebar/>
    <app-add-post/>    
    <app-footer/>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import Sidebar from '@/components/layouts/Sidebar'
import AddPost from '@/components/layouts/AddPost'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appFooter: Footer,
    appSidebar: Sidebar,
    appAddPost: AddPost
  }
}
</script>

