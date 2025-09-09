<template>
    <div :class="['sidebar-menu', { collapsed: isCollapsed }]">
        <nav v-if="!isCollapsed" :class="['sidebar', { collapsedside: isCollapsed }]"><h1>MERDA</h1></nav>
    </div>
    <div class="collapse-container">
        <button class="toggle-sidebar link" @click="toggleSidebar">{{ isCollapsed ? '->' : '<-' }}</button> 
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

    box-shadow: 0px 0px 10px 1px #a6b6da7a;

    .sidebar{

        height: 100dvh;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        z-index: 1;

        color: var(--text-color);

        transition: width 0.5s ease, transform 0.3s ease;
        &.collapsedside{
            transition: width 0.5s ease, transform 0.3s ease;
            width: 0%;
        }
    }
}

.collapse-container{
    top: 0;
    
    position: sticky;

    height: 100dvh;

    padding-left: .2rem;

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
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.3s ease;
    &:hover{
        transition: transform 0.3s ease;

        transform: scale(1.2);
    }
}

.test{
    position: relative;

    width: 30dvw;
    height: 20dvh;

    background-color: red;
}
</style>