<template>
    <div :class="['sidebar-menu', { collapsed: isCollapsed }]">
        <div class="collapse-container">
            <button class="toggle-sidebar link" @click="toggleSidebar">{{ isCollapsed ? '->' : '<-' }}</button> 
        </div>
        <nav v-if="!isCollapsed" class="sidebar"><p></p></nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isCollapsed = ref(false)

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
}

</script>

<style scoped lang="scss">

.sidebar-menu{
    position: sticky;

    top: 0;

    width: 10dvw;
    height: 100dvh;

    transition: width 0.5s ease, transform 0.3s ease;
    &.collapsed{
        transition: width 0.5s ease, transform 0.3s ease;
        width: 0dvw;
    }

    background-color: var(--main-color);
}

.sidebar{
    display: flex;
    justify-content: center;
    align-items: center;
}

.collapse-container{
    height: 100dvh;

    padding-left: 40px;

    display: flex;
    justify-content: right;
    align-items: center;
}

.toggle-sidebar{
    width: 50px;
    height: 50px;

    color: var(--text-color);
    font-size: 30px;
    background-color: transparent;
    border: none
}

.test{
    position: relative;

    width: 30dvw;
    height: 20dvh;

    background-color: red;
}
</style>