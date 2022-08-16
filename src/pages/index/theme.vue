<template>
    <div class="commonPageWrap">
        <auto-breadcrumb/>
        <div class="theme">
            theme
            <div class="themTest">
                themTest
            </div>
        </div>
        <div style="margin: 20px">
            <el-button @click="onChangeTheme">change theme</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const onChangeTheme = () => {
        const htmlNode = document.getElementsByTagName('html')[0];
        htmlNode.setAttribute("data-theme", 'technology');
    }
</script>

<style scoped lang="less">
    .commonPageWrap {
        padding-top: 30px;
        position: relative;
    }

    .theme {
        .themTest {
            color: var(--base-text);
            border: var(--base-border);
            background: var(--base-background);
            width: 300px;
            padding: 10px;
            border-radius: 4px;
        }
    }
</style>
