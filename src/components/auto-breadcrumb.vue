<template>
    <div class="autoBreadcrumb">
        <div class="toggleMenuIcon" @click="onMenuToggle">
            <i class="ds-iconfont ds-icon-collapse"></i>
        </div>
        <div>breadcrumb/xx/xx</div>
        <div>{{menuStore.isCollapse}}</div>
    </div>
</template>
<script setup lang="ts">
    import {menu} from '../pinia/menu'

    const menuStore = menu();
    const onMenuToggle = () => {
        menuStore.toggleCollapseStatus()
    }

</script>

<style scoped lang="less">
    .autoBreadcrumb {
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        position: absolute;
        top: 0;

        .toggleMenuIcon {
            cursor: pointer;
            margin-right: 10px;
        }
    }
</style>
