<template>
    <div>
        index page --ddddssswdfs
        <IndexMenu></IndexMenu>
        <router-view/>
    </div>
</template>
<script>
  import IndexMenu from './index-components/index-menu.vue'
  export default {
      components: {
          IndexMenu,
      },
  }
</script>
