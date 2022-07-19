<template>
    <div>
        index page
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
