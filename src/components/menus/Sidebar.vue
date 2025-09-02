<template>
    <div class="sidebar-menu" :class="{collapsed}">
        <button class="toggle-sidebar" @click="toggleSidebar">YAY</button>
        <nav class="sidebar"></nav>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.sidebar-menu{
    position: fixed;

    width: 8dvw;
    height: 100dvh;

    display: flex;
    justify-content: right;
    align-items: center;

    background-color: var(--main-color);
}

.sidebar{
    display: flex;
    justify-content: center;
    align-items: center;
}

.toggle-sidebar{
    width: 50px;
    height: 50px;

    margin-left: 75px;
}
</style>